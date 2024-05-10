import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/HeroSection/Services";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 text-lg">
      <HeroSection />
      <Services />
    </div>
  );
};

export default Hero;
