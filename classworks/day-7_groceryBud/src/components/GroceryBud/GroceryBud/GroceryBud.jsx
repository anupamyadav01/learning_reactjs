import { useState } from "react";
import { toast } from "react-toastify";
import ListItem from "./ListItem";
import { v4 as generateKey } from "uuid";

const GroceryBud = () => {
  const [item, setItems] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const handleOnChange = (target) => {
    setItems(target);
  };
  const requiredObj = {
    itemName: item,
    id: generateKey(),
    isChecked: false,
  };
  const hadleOnClick = () => {
    if (item === "") {
      toast.error("Item cannot be empty");
      return;
    }
    setItemsArray([...itemsArray, requiredObj]);
    setItems("");
    toast.success("Item added successfully");
  };

  const removeItem = (key) => {
    const filteredItems = itemsArray.filter((item) => item.id !== key);
    setItemsArray(filteredItems);
    toast.success("Item removed successfully");
  };

  const checkItem = (id) => {
    const checkedFilteredArray = itemsArray.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setItemsArray(checkedFilteredArray);
    toast.success("Item checked successfully");
  };
  // console.log(itemsArray);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Grocery Bud</h1>
      <div>
        <input
          value={item}
          onChange={(e) => {
            handleOnChange(e.target.value);
          }}
          type="text"
          className="px-4 py-2 rounded border border-gray-600 outline-none mr-2"
        />
        <button
          onClick={hadleOnClick}
          className="bg-black text-white px-4 py-2 rounded border border-black"
        >
          Add Item
        </button>
      </div>
      <section className="w-1/4 mt-4 p-4 text-lg">
        <ul className="flex flex-col gap-2 text-xl">
          {itemsArray.map((item) => (
            <ListItem
              key={item.id}
              item={item.itemName}
              id={item.id}
              deleteItem={removeItem}
              isChecked={item.isChecked}
              checkFunc={checkItem}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GroceryBud;
