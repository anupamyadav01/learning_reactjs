const HeroSection = () => {
  return (
    <div className="flex items-center justify-between mt-7">
      <div className="h-[430px] w-[770px] relative cursor-pointer mr-7">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          className="h-full w-full object-cover"
          src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-2.jpg"
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 text-center text-white">
          <h2 className="text-5xl font-medium mb-6">Women Fashion</h2>
          <p className="text-lg mb-8">
            Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet
            amet amet ndiam elitr ipsum diam
          </p>
          <button className="bg-transparent px-3 py-1 border border-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="relative  hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            className="h-[200px] bg-cover bg-center  object-cover"
            src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 text-center">
            <p className="text-white text-xl font-medium mb-1">SAVE 20%</p>
            <h3 className="text-white font-bold text-3xl mb-3">
              Special Offer
            </h3>
            <button className="bg-[#FED233] px-3 py-1">Shop Now</button>
          </div>
        </div>
        <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <img
            className="h-[200px] bg-cover bg-center object-cover"
            src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 text-center">
            <p className="text-white text-xl font-medium mb-1">SAVE 20%</p>
            <h3 className="text-white font-bold text-3xl mb-3">
              Special Offer
            </h3>
            <button className="bg-[#FED233] px-3 py-1">Shop Now</button>
          </div>
        </div>
      </div>

      <section>
        <div></div>
      </section>
    </div>
  );
};

export default HeroSection;
