import { useState } from "react";

const PasswordGenerator = () => {
  const [passLength, setPasswordLength] = useState();
  const [numberAllowed, setNumberAllowed] = useState();
  const [charAllowed, setCharAllowed] = useState();
  return (
    <div className="flex justify-center items-center h-screen bg-[#4061B2]">
      <div className="border-2 border-black  bg-[#202020] text-white py-8 px-6 text-lg rounded-md">
        <div className="mb-6 flezx justify-between">
          <input
            type="text"
            placeholder="Min 8 char"
            className="w-[75%] px-2 py-1 outline-none rounded text-black text-lg bg-blue-200 mr-2"
          />
          <button className="bg-blue-500 px-2 py-1 text-lg rounded-md">
            Copy
          </button>
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="length">Length</label>
          <input
            type="text"
            name="length"
            id="length"
            className="px-2 py-1 outline-none rounded text-black  bg-blue-200 mr-2 w-10"
          />
        </div>
        <section className="mr-5">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="uppercase">Uppercase</label>
            <input type="checkbox" name="uppercase" id="uppercase" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="lowercase">Lowercase</label>
            <input type="checkbox" name="lowercase" id="lowercase" />
          </div>{" "}
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="number">Number</label>
            <input type="checkbox" name="number" id="number" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="special-char">Special-char</label>
            <input type="checkbox" name="special-char" id="special-char" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PasswordGenerator;
