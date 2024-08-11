const CallToAction = () => {
  return (
    <div className="md:mt-[130px] mt-[65px] grid md:grid-cols-[35%_65%] md:mx-[-100px] mx-[-20px] bg-[url('./home/New-Collection--img.png')] bg-cover  bg-left-bottom bg-no-repeat">
      <div></div>
      <div className="bg-white md:mt-[400px] mt-[200px] md:flex items-center gap-16 py-[30px] ml-[20px] px-[50px] rounded-tl-[80px]">
        <div>
          <h2 className="font-semibold">New Collections</h2>
          <h5 className="my-[8px]">
            Join 99% of our satisfied customers and experience the difference
            today!
          </h5>
        </div>
        <button className="text-[15px] mt-[8px] font-bold border-[1px] rounded-full py-[8px] px-[25px] bg-[#1941B9] text-white">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
