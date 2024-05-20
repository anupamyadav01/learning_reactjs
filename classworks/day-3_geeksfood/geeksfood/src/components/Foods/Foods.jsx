import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Foods = () => {
  // to fetch all data
  const [query, setQuery] = useState();
  const [foodsData, setFoodsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setFoodsData(data.meals);
    setFilteredData(data.meals);
  };

  console.log(foodsData);
  const fetchFoodTypes = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    setFoodTypes(response.data.meals);
  };

  const handleOnChange = (newQuery) => {
    const newData = foodsData.filter((food) => {
      return food.strMeal.toLowerCase().includes(newQuery.toLowerCase());
    });
    setFilteredData(newData);
  };

  const handleOnCountryChange = () => {
    const newData = foodsData.map((item) => {
      return item.strArea.toLowerCase() === selectedCountry.toLowerCase();
    });

    console.log(newData);
    setFilteredData(newData);
  };

  // const navigate = useNavigate();

  useEffect(() => {
    handleOnCountryChange();
  }, [selectedCountry]);

  useEffect(() => {
    handleOnChange(query);
  }, [query]);

  useEffect(() => {
    fetchData();
    fetchFoodTypes();
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex flex-col bg-[e6f0f0]">
      <h1 className="text-3xl font-bold text-center pt-6 drop-shadow-lg">
        Search your Food Recipe
      </h1>

      <div className="flex gap-5 justify-center my-10">
        <input
          type="search"
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
          placeholder="Enter food name"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          onChange={handleCountryChange}
          value={selectedCountry}
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
        >
          <option value="">All Cuisines</option>
          {foodTypes.map((item) => {
            return (
              <option key={item.strArea} value={item.strArea}>
                {item.strArea}
              </option>
            );
          })}
        </select>
        <span
          onClick={() => {
            console.log("veg items");
          }}
          className="hover:cursor-pointer text-green-500 font-bold border-black border-[1px] flex-justify-center items-center rounded-lg px-4 pt-1"
        >
          Veg
        </span>
      </div>

      <div
        id="display_container"
        className="flex justify-center flex-wrap gap-8"
      >
        {/* <div className="py-10">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div> */}

        {/* Static meal data */}
        {filteredData ? (
          filteredData.map((food) => {
            return (
              <div
                // onClick={() => onFoodClick(food.idMeal)}
                key={food.idMeal}
                className="w-[300px] h-[290px] overflow-hidden rounded-2xl hover:scale-110 duration-200 hover:shadow-2xl hover:cursor-pointer"
              >
                <img
                  src={food.strMealThumb}
                  className="h-[200px] w-[300px] rounded-2xl"
                  alt="meal"
                />
                <div className="flex flex-col px-5 py-1">
                  <h2 className="text-xl font-bold capitalize text-[rgb(65,68,73)]">
                    {food.strMeal}
                  </h2>
                  <p className="text-[rgb(103,106,109)]">{food.strArea} Food</p>
                  <p className="flex justify-between text-green-600">
                    <span>#{food.strCategory}</span>
                    <span className="bg-green-500 text-white font-semibold w-[90px] h-[30px] rounded-lg flex justify-center items-center">
                      Check
                    </span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <span className="text-2xl font-bold text-white">
            No Data found...
          </span>
        )}
      </div>
    </div>
  );
};

export default Foods;
