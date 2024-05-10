import { useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(6);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePass = () => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumber) str += "0123456789";
    if (includeSymbol) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(randomNumber);
    }

    setPassword(password);
  };
  const passwordRef = useRef(null);
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePass();
  }, [includeSymbol, includeNumber, length]);

  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="mb-3 text-white text-3xl font-semibold pt-12">
        Password Generator
      </h1>
      <div className="shadow-md p-5 bg-[#E2DFD0] rounded-md text-center">
        <input
          type="text"
          readOnly
          value={password}
          className="border border-gray-400 text-xl px-3 py-2 outline-none"
          ref={passwordRef}
        />
        <button
          className="border border-transparent bg-indigo-600 text-xl px-5 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-indigo-700"
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <div className="mt-5 flex items-center justify-between">
          <label htmlFor="length">
            Length: <span>{length}</span>
          </label>
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={6}
            max={20}
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <label htmlFor="include-number">Include Number: </label>
          <input
            type="checkbox"
            value={includeNumber}
            id="include-number"
            onClick={() => setIncludeNumber((perv) => !perv)}
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <label htmlFor="include-character ">Include Symbols: </label>
          <input
            type="checkbox"
            id="include-character"
            value={includeSymbol}
            onClick={() => {
              setIncludeSymbol((perv) => !perv);
            }}
          />
        </div>

        <button
          className="mt-10 border text-center border-transparent bg-indigo-600 text-xl px-5 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-indigo-700 rounded-lg"
          onClick={generatePass}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
