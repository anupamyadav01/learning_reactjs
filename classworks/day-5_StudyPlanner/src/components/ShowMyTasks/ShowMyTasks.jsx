import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
// import { useState } from "react";
const ShowMyTasks = ({ subject, duration, deleteTask, id, setTaskFunc }) => {
  // const [idEditable, setIdEditable] = useState(false);
  const handleClickDuratoinPlus = (id) => {
    setTaskFunc((prev) => {
      const newTasksArray = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            hours: +item.hours + 1,
          };
        } else {
          return item;
        }
      });

      return newTasksArray;
    });
  };
  const handleClickDuratoinMinus = (id) => {
    setTaskFunc((prev) => {
      const newTasksArray = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            hours: +item.hours <= 0 ? 0 : +item.hours - 1,
          };
        } else {
          return item;
        }
      });

      return newTasksArray;
    });
  };

  return (
    <li className="shadow-md p-2 text-xl mb-3 flex justify-around items-center rounded-xl bg-gray-400">
      <div className="flex flex-col">
        <span>Subject Name: {subject} </span>
        <span>Duration (in hours): {duration}</span>
      </div>
      <span className="flex gap-3 items-center bg-gray-200 py-3 px-2 rounded">
        <IoMdAdd
          className="cursor-pointer"
          onClick={() => handleClickDuratoinPlus(id)}
        />
        <IoMdRemove
          className="cursor-pointer"
          onClick={() => handleClickDuratoinMinus(id)}
        />
        <MdDelete className="cursor-pointer" onClick={() => deleteTask(id)} />
        <FaEdit className="cursor-pointer" />
      </span>
    </li>
  );
};

ShowMyTasks.propTypes = {
  subject: PropTypes.string,
  deleteTask: PropTypes.func,
  id: PropTypes.string,
  setTaskFunc: PropTypes.func,
  duration: PropTypes.number,
};
export default ShowMyTasks;
