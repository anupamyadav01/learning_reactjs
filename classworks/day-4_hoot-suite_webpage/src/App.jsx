import Features from "./components/Features/Features";
import HeroSection from "./components/HeroSection/HeroSection";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col">
        <Navbar />
        <HeroSection />
        <Features />
      </div>
    </>
  );
}

export default App;
