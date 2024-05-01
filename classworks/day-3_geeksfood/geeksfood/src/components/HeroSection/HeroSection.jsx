import Button from "../Button/Button";
import assets from "../images/backgrund-img.jpg";

function HeroSection() {
  return (
    <div className="h-screen w-full">
      <img
        className="bg-cover h-full w-full bg-center bg-no-repeat"
        src={assets}
        alt="hero-img"
      />
      <div className="absolute top-[30%] left-10 w-[1280px] text-left">
        <div className="max-w-xl text-center ">
          <h1 className="text-5xl font-white font-extrabold">
            Let us find your
          </h1>
          <h1 className="text-5xl text-rose-600 font-extrabold mb-4">
            Forever Food.
          </h1>
          <p className="mb-2 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="text-xl mb-8">
            {" "}
            Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              btnName="Search Now"
              className=" block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            />
            <Button
              btnName="Know more"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
