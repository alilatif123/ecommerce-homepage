import CallToAction from "../components/Home/CallToAction";
import CategoryCard from "../components/Home/CategoryCard";
import ClientsLogos from "../components/Home/ClientsLogos";
import Hero from "../components/Home/Hero";
import LatestProducts from "../components/Home/LatestProducts";
import RecomendedProducts from "../components/Home/RecomendedProducts";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div className="md:px-[100px] px-[20px] ">
      <Hero />
      <CategoryCard />
      <RecomendedProducts />
      <WhyChooseUs />
      <LatestProducts />
      <CallToAction />
      <ClientsLogos />
    </div>
  );
};

export default Home;
