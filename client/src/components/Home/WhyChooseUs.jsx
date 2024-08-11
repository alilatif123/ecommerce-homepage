const WhyChooseUs = () => {
  return (
    <div className="md:mt-[130px] mt-[65px]">
      <h2 className="text-center font-semibold">Why Should Choose Us?</h2>
      <div className="md:mt-[60px] mt-[30px] md:flex grid grid-cols-2 items-center justify-center mx-auto md:justify-between gap-5">
        <div>
          <div className="bg-[#EFF0F4] h-[60px] w-[60px] mx-auto md:mx-0 items-center flex rounded-[5px] border-b-[3px] border-b-[#1941B9]">
            <img src="./home/truck.png" className="mx-auto" />
          </div>
          <h4 className="mt-[20px] font-semibold text-center md:text-start">
            Free Shipping
          </h4>
          <h5 className="mt-[8px] text-center md:text-start">
            Enjoy free shipping on all orders, no minimum purchase required!
          </h5>
        </div>
        <div>
          <div className="bg-[#EFF0F4] h-[60px] w-[60px] mx-auto md:mx-0 items-center flex rounded-[5px] border-b-[3px] border-b-[#1941B9]">
            <img src="./home/pay.png" className="mx-auto" />
          </div>
          <h4 className="mt-[20px] font-semibold text-center md:text-start">
            Easy Payments
          </h4>
          <h5 className="mt-[8px] text-center md:text-start">
            Enjoy free shipping on all orders, no minimum purchase required!
          </h5>
        </div>
        <div>
          <div className="bg-[#EFF0F4] h-[60px] w-[60px] items-center flex rounded-[5px] border-b-[3px] border-b-[#1941B9] mx-auto md:mx-0">
            <img src="./home/shield.png" className="mx-auto" />
          </div>
          <h4 className="mt-[20px] font-semibold text-center md:text-start">
            Money Back Guarantee
          </h4>
          <h5 className="mt-[8px] text-center md:text-start">
            Enjoy free shipping on all orders, no minimum purchase required!
          </h5>
        </div>
        <div>
          <div className="bg-[#EFF0F4] h-[60px] w-[60px] items-center flex rounded-[5px] border-b-[3px] border-b-[#1941B9] mx-auto md:mx-0">
            <img src="./home/quality.png" className="mx-auto" />
          </div>
          <h4 className="mt-[20px] font-semibold text-center md:text-start">
            Finest Quality
          </h4>
          <h5 className="mt-[8px] md:text-start text-center">
            Enjoy free shipping on all orders, no minimum purchase required!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
