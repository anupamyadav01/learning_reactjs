import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Showcase from "./components/Showcase/Showcase";
import ReviewsContainer from "./components/ReviewsContainer/ReviewsContainer";
import Footer from "./components/Footer/Footer";
// import Quotes from "./components/Quotes/Quotes";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase />
      <ReviewsContainer />

      <Footer />
    </>
  );
}

export default App;
