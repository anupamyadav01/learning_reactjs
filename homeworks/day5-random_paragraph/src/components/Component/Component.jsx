import { useState } from "react";
import Paragraphs from "../Paragraphs/Paragraphs";
import data from "../Data";

const Component = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleOnClick = () => {
    let amount = parseInt(count);
    if (amount < 0) {
      alert("Please enter a positive number");
      amount = 1;
    }
    if (amount > 8) {
      alert("Please enter a number less than 8");
      amount = 8;
    }
    setText(data.slice(0, amount));
    return;
  };

  return (
    <div className="border-2 border-white flex flex-col justify-start items-center h-screen w-[80%] mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-5">
        TIRED OF BORING LOREM IPSUM?
      </h1>
      <div className="mb-8">
        <span className="text-2xl mr-2">Paragraphs:</span>
        <input
          type="number"
          className="border border-gray-300 px-2 py-1 w-[100px] mr-2"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 rounded text-sm px-5 py-2 mb-2"
          onClick={handleOnClick}
        >
          Generate
        </button>
      </div>
      {text.map((item, index) => (
        <Paragraphs key={item} className="mb-4" text={item} srNo={index} />
      ))}
    </div>
  );
};

export default Component;
