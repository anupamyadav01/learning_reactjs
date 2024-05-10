// import { useState } from "react";
import "./App.css";
// import Image from "./components/Image/Image";
// import Text from "./components/Text/Text";
import AddPlanner from "./components/AddPlanner/AddPlanner";
// import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  // const [showImg, setShowImg] = useState(true);
  // const showImage = () => {
  //   setShowImg(true);
  // };
  // const showText = () => {
  //   setShowImg(false);
  // };
  return (
    <>
      {/* <div className="text-center">
        {showImg ? <Image /> : <Text />}
        <div className="mt-5">
          <button
            onClick={showImage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            Image
          </button>
          <button
            onClick={showText}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Text
          </button>
        </div>
      </div> */}
      <div className="max-w-[700px] mx-auto mt-5">
        <AddPlanner />
      </div>
    </>
  );
}

export default App;
