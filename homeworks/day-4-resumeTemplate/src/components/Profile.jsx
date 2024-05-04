import { CgProfile } from "react-icons/cg";
function Profile() {
  return (
    <div className="w-[50%] m-auto flex bg-white border-l-2  border-r-2">
      <div>
        <CgProfile className="text-[#00FEFE] text-[5.5rem] mt-10 ml-5" />
        <h1 className="font-extrabold text-center text-xl mt-1 ml-4">
          Profile
        </h1>
      </div>
      <div className=" border-r-2 border-black border-b-2 px-6 mt-5 py-6">
        <h1 className="font-extrabold text-3xl">
          Anupam <br />
          Yadav
        </h1>
        <p className=" tracking-wider">Frontend Enginner</p>
      </div>
      <div className="border-b-2 border-black px-6 mt-10">
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          amet repellat doloribus, error voluptatum ipsam nulla numquam eaque?
        </p>
        <h1>
          <strong>Email</strong>: anupamy571@gmail.com
        </h1>
        <h1>
          <strong>Website</strong>: anupamyadav.com
        </h1>
      </div>
    </div>
  );
}

export default Profile;
