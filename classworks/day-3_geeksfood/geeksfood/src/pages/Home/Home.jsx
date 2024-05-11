import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Showcase from "../../components/Showcase/Showcase";
import ReviewsContainer from "../../components/ReviewsContainer/ReviewsContainer";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Showcase />
      <ReviewsContainer />
      <Footer />
    </div>
  );
};

export default Home;
