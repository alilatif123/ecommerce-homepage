import Slider from "react-slick";

const settingsLogo = {
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  vertical: false,
  arrows: false,
  dots: false,
};
const ClientsLogos = () => {
  const logos = [
    "./home/logo1.png",
    "./home/logo2.png",
    "./home/logo3.png",
    "./home/logo4.png",
    "./home/logo5.png",
    "./home/logo6.png",
  ];

  return (
    <>
      <div className="mt-[65px] md:mt-[130px] hidden md:flex items-center justify-between mx-[50px]">
        <img src="./home/logo1.png" />
        <img src="./home/logo2.png" />
        <img src="./home/logo3.png" />
        <img src="./home/logo4.png" />
        <img src="./home/logo5.png" />
        <img src="./home/logo6.png" />
      </div>
      <div className="mt-8 md:mt-16 hidden md:hidden flex-wrap justify-center items-center gap-4 md:gap-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="h-8 md:h-12"
          />
        ))}
      </div>
      <div className="mt-[65px] md:mt-[130px] md:hidden">
        <Slider {...settingsLogo} className="client-logo-slider">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-20">
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientsLogos;
