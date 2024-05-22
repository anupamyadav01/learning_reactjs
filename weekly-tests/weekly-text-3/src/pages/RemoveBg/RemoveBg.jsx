import axios from "axios";
import { useState } from "react";

export default function RemoveBackground() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
    const apiKey = "VB4g5EFzeZuFkVRLPJYRppJU";
    const apiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const response = await axios({
        method: "post",
        url: apiUrl,
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": apiKey,
        },
        encoding: null,
      });

      if (response.status !== 200) {
        console.error("Error: ", response.status, response.statusText);
      } else {
        const imgsrc = URL.createObjectURL(
          new Blob([response.data], { type: "image/png" })
        );

        setBgRemove(imgsrc);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  const handleReset = () => {
    setBgRemove(null);
    setImage(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold mt-3 text-[#48CAE4]">
          Image Background Remover
        </h1>
        <input
          type="file"
          id="userImg"
          className="form-control-file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>
      <div className="flex mb-4 gap-8">
        {image && (
          <div className="image-preview mr-2">
            <img
              className="w-72"
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
            />
          </div>
        )}
        {bgRemove && (
          <div className="w-72">
            <img src={bgRemove} alt="" />
          </div>
        )}
      </div>
      <div className="text-center">
        <div>
          <button
            type="button"
            onClick={handleRemoveBackground}
            className="border-2 border-white px-14 py-3 rounded-full mt-3"
          >
            {bgRemove ? "Background Removed" : "Remove Background"}
          </button>
        </div>
        {bgRemove && (
          <div className="mb-4">
            <a href={bgRemove} download="background_removed_image.png">
              <button className="border-2 border-white px-14 py-3 rounded-full mt-3">
                Download
              </button>
            </a>
          </div>
        )}
        {bgRemove && (
          <button
            type="button"
            onClick={handleReset}
            className="border-2 border-white px-14 py-3 rounded-full mt-3"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
