const Footer = () => {
  return (
    <div className="md:px-[100px] px-[20px] ">
      <div className="md:mt-[130px] mt-[65px] mb-[10px] md:mb-[20px]">
        <hr className="md:mx-[-100px] mx-[-20px] h-[5px]"></hr>
        <div className="md:mt-[60px] mt-[30px] grid md:grid-cols-[30%_auto_auto_auto]  justify-between ">
          <div>
            <h4 className="font-bold">About</h4>
            <h5 className="my-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <div className="flex items-center gap-[5%] my-[15px]">
              <img src="./home/facebook.png" className="cursor-pointer" />
              <img src="./home/twitter.png" className="cursor-pointer" />
              <img src="./home/instagram.png" className="cursor-pointer" />
              <img src="./home/youtube.png" className="cursor-pointer" />
            </div>
            <hr className="my-[25px] md:hidden"></hr>
          </div>
          <div>
            <h4 className="font-bold">Shopping Online</h4>
            <div className="my-[25px]">
              <h5 className="cursor-pointer">Order Status</h5>
              <h5 className="mt-[7px] cursor-pointer">Shipping and Delivery</h5>
              <h5 className="mt-[7px] cursor-pointer">Returns</h5>
              <h5 className="mt-[7px] cursor-pointer">Payment Options</h5>
              <h5 className="mt-[7px] cursor-pointer">Contact Us</h5>
            </div>
            <hr className="my-[25px] md:hidden"></hr>
          </div>
          <div>
            <h4 className="font-bold">Information</h4>
            <div className="my-[25px]">
              <h5 className="cursor-pointer">Gift Card</h5>
              <h5 className="mt-[7px] cursor-pointer">Find a Store</h5>
              <h5 className="mt-[7px] cursor-pointer">NewsLetter</h5>
              <h5 className="mt-[7px] cursor-pointer">Become a Member</h5>
              <h5 className="mt-[7px] cursor-pointer">Site Feedback</h5>
            </div>
            <hr className="my-[25px] md:hidden"></hr>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <div className="my-[25px]">
              <h5 className="cursor-pointer">chaudharyalilatif@gmail.com</h5>
              <h5 className="mt-[7px] cursor-pointer">Tel: +92 3066298090</h5>
            </div>
          </div>
        </div>
        <hr className="md:my-[60px] mb-[25px]"></hr>
        <h5 className="text-center">&copy; Copyrights. All Rights Reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
