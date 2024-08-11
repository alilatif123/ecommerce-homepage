import { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getLatestProducts } from "../../feautures/products/productsSlice";

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 1,
  speed: 500,
};

const LatestProducts = () => {
  const dispatch = useDispatch();
  const { latestProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);
  console.log(latestProducts.data);

  return (
    <div className="md:mt-[130px] mt-[65px]">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <h2 className="font-semibold text-center">New Arrivals</h2>
        <button className="text-[15px] md:flex hidden font-bold border-[2px] rounded-full py-[8px] px-[25px]">
          SHOW MORE
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Slider {...settings} className="pt-[30px] md:hidden ">
          {latestProducts.data &&
            latestProducts.data.map((product) => (
              <div className="cursor-pointer" key={product._id}>
                <img
                  src={`${import.meta.env.VITE_ASSETS}${product.image}`}
                  alt={product.name}
                />
                <h4 className="mt-[20px] font-bold">{product.name}</h4>
                <h4 className="mt-[5px] font-[300]">${product.price}</h4>
              </div>
            ))}
        </Slider>
      )}
      <button className="text-[15px] flex justify-center font-bold border-[2px] rounded-full py-[8px] px-[25px] mx-auto mt-[30px] md:hidden">
        SHOW MORE
      </button>
      <div className="mt-[60px] hidden md:grid grid-cols-5 gap-5 ">
        {latestProducts.data &&
          latestProducts.data.map((product) => (
            <div className="cursor-pointer" key={product._id}>
              <img
                src={`${import.meta.env.VITE_ASSETS}${product.image}`}
                alt={product.name}
              />
              <h4 className="mt-[20px] font-bold">{product.name}</h4>
              <h4 className="mt-[5px] font-[300]">
                ${product.price.toFixed(2)}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LatestProducts;
