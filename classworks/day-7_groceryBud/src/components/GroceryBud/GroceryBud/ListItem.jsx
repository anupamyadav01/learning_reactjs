import PropTypes from "prop-types";
import Delete from "../../../assets/delete.png";

const ListItem = ({ item, id, deleteItem, isChecked, checkFunc }) => {
  return (
    <>
      <li className="shadow-md p-2">
        <div className="flex justify-between">
          <input
            onChange={() => checkFunc(id)}
            type="checkbox"
            className="mr-1"
          />
          <p
            className=""
            style={{ textDecoration: isChecked ? "line-through" : "" }}
          >
            {item}
          </p>
          <button>
            <img
              className="w-8"
              src={Delete}
              onClick={() => {
                deleteItem(id);
              }}
            />
          </button>
        </div>
      </li>
    </>
  );
};

ListItem.propTypes = {
  item: PropTypes.string,
  id: PropTypes.number,
  deleteItem: PropTypes.func,
  isChecked: PropTypes.bool,
  checkFunc: PropTypes.func,
};

export default ListItem;
