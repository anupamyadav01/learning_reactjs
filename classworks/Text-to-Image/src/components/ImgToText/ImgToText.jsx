import { useState } from "react";

const ImgToText = () => {
  const API_TOKEN = "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";
  const [text, setText] = useState("");
  const [show, setShow] = useState("");

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
          method: "POST",
          body: JSON.stringify({ inputs: text }),
        }
      );

      const blobData = await response.blob();
      const imageUrl = URL.createObjectURL(blobData);
      setShow(imageUrl);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="h-screen w-full flex justify-center flex-col items-center bg-zinc-700 text-white">
      <div className="pb-10 flex justify-center flex-col bg-zinc-500 p-10 mb-8">
        <div className="text-white text-center ">
          <h1 className="text-3xl font-bold">AI Image Generator</h1>
          <p className="mb-10">
            Write any descriptive and appropriate statements in the text box{" "}
            <br /> to recieve the four most accurately AI generated images of
            your liking!!!
          </p>
        </div>
        <span className="text-center">
          <input
            type="text"
            placeholder="Your sentence here..."
            className="border border-zinc-500 px-3 text-black outline-none py-2 rounded-md"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="border border-zinc-800 px-3 py-2 rounded-md ml-3"
          >
            Compute
          </button>
        </span>
      </div>
      <div>
        {show && (
          <img
            className="w-[300px] h-[300px] rounded-lg"
            src={show}
            alt="Image from Hugging Face API"
          />
        )}
      </div>
    </div>
  );
};

export default ImgToText;
