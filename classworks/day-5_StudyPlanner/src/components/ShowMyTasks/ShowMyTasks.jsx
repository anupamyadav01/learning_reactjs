import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const ShowMyTasks = ({ subject, duration, deleteTask }) => {
  return (
    <li className="shadow-md p-2 text-xl mb-3 flex justify-around items-center rounded-xl">
      <div className="flex flex-col">
        <span>Subject Name: {subject} </span>
        <span>Duration (in hours): {duration}</span>
      </div>
      <span className="flex gap-3 items-center bg-gray-200 py-3 px-2 rounded">
        <IoMdAdd
          className="cursor-pointer"
          onClick={() => console.log("add")}
        />
        <IoMdRemove className="cursor-pointer" />
        <MdDelete className="cursor-pointer" onClick={deleteTask} />
        <FaEdit className="cursor-pointer" />
      </span>
    </li>
  );
};

ShowMyTasks.propTypes = {
  subject: PropTypes.string,
  duration: PropTypes.string,
  deleteTask: PropTypes.func,
};
export default ShowMyTasks;
