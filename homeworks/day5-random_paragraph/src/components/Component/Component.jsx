import Paragraphs from "../Component2/Paragraphs";

const Component = () => {
  return (
    <div className="border-2 border-white flex flex-col justify-start items-center h-screen w-[80%] mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-5">
        TIRED OF BORING LOREM IPSUM?
      </h1>
      <div className="mb-8">
        <span className="text-2xl mr-2">Paragraphs:</span>
        <input
          type="number"
          className="border border-gray-300 px-2 py-2 w-[100px] mr-2"
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>
      </div>
      <Paragraphs className="mb-4" />
    </div>
  );
};

export default Component;
