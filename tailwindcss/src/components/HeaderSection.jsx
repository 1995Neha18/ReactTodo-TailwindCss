// import React, { useState } from "react";

// const HeaderSection = ({ addTask, setFilter }) => {
//   const [task, setTask] = useState("");

//   const handleAddTask = () => {
//     if (task.trim() !== "") {
//       addTask(task);
//       setTask("");
//     }
//   };

//   return (
//     <div className="mb-8">
//       <h1 className="text-2xl text-[#728FCE] font-semibold">Todo List</h1>
//       <div className="flex mt-4 gap-5">
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
//           placeholder="My Task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button
//           className="p-2 border-2 rounded border-r-amber-500 text-black border-teal hover:text-white  hover:bg-[#4863A0] bg-teal"
//           onClick={handleAddTask}
//         >
//           Add
//         </button>
//         <select
//           className="border rounded shadow appearance-none px-3 py-2 text-black flex-no-grow "
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Completed">Completed</option>
//           <option value="Uncompleted">Uncompleted</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default HeaderSection;

import React, { useState } from "react";

const HeaderSection = ({ addTask, setFilter }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="my-4">
      <h1 className="text-[#728FCE] text-2xl font-bold mb-2">Todo List</h1>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder=""
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-6 py-1 shadow appearance-none border"
        />
        <button
          onClick={handleAdd}
          className=" text-black px-2 hover:text-white hover:bg-[#4863A0]  border-r-2 border-yellow-500"
        >
          Add
        </button>
        <select
          name=""
          id=""
          className="shadow appearance-none px-2 flex-no-grow "
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderSection;
