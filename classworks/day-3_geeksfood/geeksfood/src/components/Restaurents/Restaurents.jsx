import data from "../../data/data";
import Header from "../../components/Header/index";
import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
const Restaurents = () => {
  const [query, setQuery] = useState("");
  const [newData, setNewData] = useState([]);

  const filterData = (query) => {
    const filterdData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setNewData(filterdData);
  };

  useEffect(() => {
    filterData(query);
  }, [query]);

  return (
    <div className="bg-[#E6F0F0]">
      <Header />
      <div className="pt-20">
        <div className="flex justify-center my-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search restaurant..."
            className="text-lg py-2 mb-6 px-3 border-2 border-gray-200 rounded-lg w-[400px] outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center ">
          {newData.length > 0 ? (
            newData.map((item) => {
              return (
                <RestaurentCard
                  key={item._id + Math.random()}
                  name={item.name}
                  location={item.address}
                  postcode={item.postcode}
                  outcode={item.outcode}
                />
              );
            })
          ) : (
            <p className="text-xl text-red-600">No data found</p>
          )}
        </div>
        {/* <RestaurentCard name="name" location="location" /> */}
      </div>
    </div>
  );
};

export default Restaurents;
