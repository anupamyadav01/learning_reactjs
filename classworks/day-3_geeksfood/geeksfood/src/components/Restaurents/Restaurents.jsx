import data from "../../data/data";
import Header from "../../components/Header/index";
import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
const Restaurents = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-[1200px] mx-auto">
      <Header />
      <div className="pt-20">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="text-xl py-2 mb-6 px-3"
        />
        <div className="flex flex-wrap gap-4 justify-center ">
          {data.map((item) => {
            return (
              <RestaurentCard
                key={item._id}
                name={item.name}
                location={item.address}
                postcode={item.postcode}
                outcode={item.outcode}
              />
            );
          })}
        </div>
        {/* <RestaurentCard name="name" location="location" /> */}
      </div>
    </div>
  );
};

export default Restaurents;
