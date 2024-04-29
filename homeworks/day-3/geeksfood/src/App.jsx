import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Showcase from "./components/Showcase/Showcase";
import ReviewsContainer from "./components/ReviewsContainer/ReviewsContainer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase />
      <ReviewsContainer />
    </>
  );
}

export default App;
