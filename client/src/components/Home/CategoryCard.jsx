import { MoveRight } from "lucide-react";

const CategoryCard = () => {
  return (
    <div className="md:mt-[130px] mt-[65px] grid md:grid-cols-2 gap-[2%] ">
      <div className="bg-[url('./home/men-coll.png')] bg-cover   grid grid-cols-2 bg-no-repeat md:px-[80px] px-[20px]">
        <div></div>
        <div className="py-[60px] md:py-[120px] items-center">
          <h2 className="font-semibold">
            Men's Casual <br></br>Fashion Style
          </h2>
          <div className="flex items-center pt-[20px]">
            <span className="h-[45px] w-[45px] rounded-[50%] bg-[#1941B9]"></span>
            <div className="flex relative right-[25px] items-center gap-[20px]">
              <h5 className="font-bold cursor-pointer">VIEW ALL</h5>
              <MoveRight className="text-[14px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('./home/women-coll.png')] bg-cover  bg-right-top grid grid-cols-2 bg-no-repeat md:px-[80px] px-[20px]">
        <div className="py-[60px] md:py-[120px] items-center">
          <h2 className="font-semibold">
            Women's Casual <br></br>Fashion Style
          </h2>
          <div className="flex items-center pt-[20px]">
            <span className="h-[45px] w-[45px] rounded-[50%] bg-[#1941B9]"></span>
            <div className="flex relative right-[25px] items-center gap-[20px]">
              <h5 className="font-bold cursor-pointer">VIEW ALL</h5>
              <MoveRight className="text-[14px] cursor-pointer" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CategoryCard;
