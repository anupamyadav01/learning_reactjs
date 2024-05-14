import { useEffect, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

const PassGenn = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState();
  const [isNumberSelected, setIsNumberSelected] = useState(false);
  const [isSymbolSelected, setIsSymbolSelected] = useState(false);
  const [isUpperCaseSelected, setIsUpperCaseSelected] = useState(false);
  const [isLowerCaseSelected, setIsLowerCaseSelected] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const generatePassword = () => {
    if (
      isNumberSelected === false &&
      isSymbolSelected === false &&
      isUpperCaseSelected === false &&
      isLowerCaseSelected === false
    ) {
      alert("Please Select Atleast One Character Type");
      return;
    } else {
      setIsCopied(false);
      let str = "";
      if (isLowerCaseSelected === true) str += "abcdefghijklmnopqrstuvwxyz";
      if (isNumberSelected === true) str += "0123456789";
      if (isSymbolSelected === true) str += "!@#$%^&*()";
      if (isUpperCaseSelected === true) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      //   else alert("Please Select Atleast One Character Type");
      let mainPass = "";
      for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * str.length) + 1;
        mainPass += str.charAt(randomNumber);
        //   console.log(randomNumber);
      }
      setPassword(mainPass);
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumberSelected, isSymbolSelected, isUpperCaseSelected]);

  return (
    <div className="bg-zinc-300 pt-6 pb-5 min-w-[600px] text-center rounded-md">
      <h1 className="text-4xl mb-4 font-bold">Password Generator</h1>
      <div className="text-center items-center flex justify-center">
        <label htmlFor="length" className="text-xl capitalize">
          Enter the length of password:
        </label>
        <input
          className="px-3 py-1 rounded-md ml-3 w-20 border-none outline-none text-xl"
          value={length}
          type="number"
          id="length"
          min="1"
          max="20"
          onChange={(e) => {
            if (e.target.value >= 1 && e.target.value <= 20) {
              setLength(e.target.value);
            } else {
              setLength("");
              alert("Please choose length between 1 to 20");
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center text-end justify-center text-xl gap-2 mt-5">
        <span>
          <label htmlFor="uppercase">Include Upper Case: </label>
          <input
            type="checkbox"
            id="uppercase"
            onChange={(e) => setIsUpperCaseSelected(e.target.checked)}
          />
        </span>
        <span>
          <label htmlFor="lowercase">Include Lower Case: </label>
          <input
            type="checkbox"
            id="lowercase"
            checked
            onChange={(e) => setIsLowerCaseSelected(e.target.checked)}
          />
        </span>
        <span>
          <label htmlFor="symbol">Include Symbols: </label>
          <input
            type="checkbox"
            id="symbol"
            onChange={(e) => setIsSymbolSelected(e.target.checked)}
          />
        </span>
        <span>
          <label htmlFor="number">Include Numbers: </label>
          <input
            type="checkbox"
            id="number"
            onChange={(e) => setIsNumberSelected(e.target.checked)}
          />
        </span>
        <button
          onClick={generatePassword}
          className=" px-5 py-2 bg-zinc-100 mt-5 rounded-lg mb-5 hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-200 ease-in active:scale-105"
        >
          Generate Password
        </button>
        <div className="flex items-center flex-col gap-3">
          <label htmlFor="generatedP" className="text-2xl font-medium ">
            Generated Password
          </label>
          <input
            type="text"
            id="generatedP"
            value={password}
            readOnly
            className="border-none outline-none px-3 py-1 rounded-md w-96 text-xl"
          />
          <button
            className="ml-4 bg-zinc-800 text-zinc-300 px-5 py-1 rounded-md mt-3"
            onClick={() => {
              navigator.clipboard.writeText(password);
              setIsCopied((prev) => !prev);
            }}
          >
            {isCopied ? "Copied to clipboard!!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassGenn;
