import { useState } from "react";
import ShowMyTasks from "../ShowMyTasks/ShowMyTasks";

const AddPlanner = () => {
  const [myTasks, setMyTasks] = useState([]);

  const [subjectName, setSubjectName] = useState("");
  const [hours, setHours] = useState("");
  const handleAddTask = () => {
    if (!subjectName || !hours) return;

    const newTask = {
      subjectName,
      hours,
    };
    setMyTasks([...myTasks, newTask]);
    setSubjectName("");
    setHours("");
  };
  const deleteTask = () => {
    console.log("delete");
  };
  return (
    <div className=" text-center p-10 shadow-md">
      <h1 className="text-4xl text-gray-700 mb-8 font-bold">Study Planner</h1>
      <div className="flex justify-center gap-4">
        <input
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          type="text"
          placeholder="Subject Name"
          className="border border-gray-300 py-2 px-4"
        />
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          type="number"
          placeholder="Duration (in hours)"
          className="border border-gray-300 py-2 px-4 w-1/4"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-10">
        {myTasks.map((task) => (
          <ShowMyTasks
            key={task.subjectName}
            subject={task.subjectName}
            duration={task.hours}
            delete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
export default AddPlanner;
