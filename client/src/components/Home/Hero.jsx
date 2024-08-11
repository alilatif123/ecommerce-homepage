import { MoveLeft, MoveRight } from "lucide-react";
import Header from "../Navigation/Header";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('./home/Slider-img.png')] bg-blend-overlay bg-black md:bg-opacity-10 bg-opacity-50 mx-[-100px]">
      <div className="px-[100px]">
        <Header />

        <div className="text-white grid-cols-2 pt-[150px] pb-[90px] md:pt-[190px]">
          <div>
            <h4 className="font-normal">SALE</h4>
            <h1 className="font-light">
              STOCKTAKE SALE <br /> UPTO 75% OFF
            </h1>

            <div className="flex items-center pt-[20px]">
              <span className="h-[45px] w-[45px] bg-[#1941B9] rounded-full"></span>
              <div className="flex items-center gap-[20px] relative right-[25px]">
                <h5 className="font-bold cursor-pointer">SHOP NOW</h5>
                <MoveRight className="text-[14px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-[5%] md:grid-cols-[70%_auto] md:mx-[-100px] ml-[-20px] z-50">
          <div className="flex items-center justify-between gap-[30px] py-[20px] pl-[20px] pr-[70px] bg-white text-black rounded-tr-[60px] md:pl-[100px]">
            <div>
              <h5 className="font-extrabold py-[5px]">Free Shipping</h5>
              <h5>
                Enjoy free shipping on all orders, no minimum purchase required!
              </h5>
            </div>
            <div className="hidden md:grid">
              <h5 className="font-extrabold py-[5px]">
                99% Satisfied Customers
              </h5>
              <h5>
                Join 99% of our satisfied customers and experience the
                difference today!
              </h5>
            </div>
            <div className="hidden md:grid">
              <h5 className="font-extrabold py-[5px]">Originally Guaranteed</h5>
              <h5>Originally guaranteed for quality and satisfaction.</h5>
            </div>
          </div>

          <div className="hidden items-center text-white md:flex">
            <div className="flex items-center cursor-pointer">
              <span className="h-[45px] w-[45px] bg-[#1941B9] rounded-full"></span>
              <MoveLeft className="relative right-[35px]" />
            </div>
            <div className="flex items-center cursor-pointer">
              <MoveRight className="relative" />
              <span className="h-[45px] w-[45px] bg-[#1941B9] rounded-full ml-[-35px]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
