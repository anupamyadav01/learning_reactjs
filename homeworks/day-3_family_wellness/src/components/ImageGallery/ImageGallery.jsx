import images from "../images/images.js";
const ImageGallery = () => {
  return (
    <div className="mb-4">
      {
        <section className="border-2 border-black relative">
          <img src={images[0].src} alt="" />
          <div className="absolute right-0 bottom-0 text-3xl text-white">
            {" "}
            <span className="material-symbols-outlined text-5xl mr-2 cursor-pointer">
              chevron_left
            </span>
            <span className="ml-2 material-symbols-outlined text-5xl cursor-pointer">
              chevron_right
            </span>
          </div>
        </section>
      }
    </div>
  );
};

export default ImageGallery;
