import { CiMemoPad } from "react-icons/ci";

function Skill() {
  return (
    <div className="w-[50%] m-auto flex bg-white border-l-2 border-r-2  py-4">
      <div>
        <CiMemoPad className="text-[#00FEFE] text-[5.5rem] mt-10" />
        <h1 className="font-extrabold text-center text-xl mt-1">
          Skills and Samples
        </h1>
      </div>
      <div className=" border-r-2 border-t-2 border-black border-b-2 py-6 flex flex-col gap-5">
        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">React.js</h1>
          <p>⭐⭐⭐</p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">Javascript</h1>
          <p>⭐⭐⭐⭐⭐</p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">Html</h1>
          <p>⭐⭐⭐⭐⭐</p>
        </div>

        <div className="flex gap-10 px-6">
          <h1 className="font-bold ">Css</h1>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <div className="border-b-2 border-t-2 border-black  px-3 py-5">
        <div className="flex gap-4 ">
          <h1 className="font-bold ">Zapier</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="flex gap-4">
          <h1 className="font-bold ">spoke</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex gap-4">
          <h1 className="font-bold ">nDash</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
