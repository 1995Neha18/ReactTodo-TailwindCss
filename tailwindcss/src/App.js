// // App.jsx
// import React, { useState } from "react";
// import "./App.css";

// import HeaderSection from "./components/HeaderSection";
// import ListSection from "./components/ListSection";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("All");

//   const addTask = (task) => {
//     setTasks([...tasks, { text: task, completed: false }]);
//   };

//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "All") {
//       return true;
//     } else if (filter === "Completed") {
//       return task.completed;
//     } else {
//       return !task.completed;
//     }
//   });

//   return (
//     <div>
//       <div className="h-screen overflow-hidden flex items-center justify-center bg-[#728FCE]">
//         <div className="h-100 w-full flex items-center justify-center font-sans">
//           <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-1/2">
//             <HeaderSection addTask={addTask} setFilter={setFilter} />
//             <ListSection tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection.jsx";
import ListSection from "./components/ListSection.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Completed") {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  return (
    <div className="h-screen bg-[#728FCE] flex flex-col justify-center items-center">
      <div className="bg-white w-[500px] h-100 shadow-xl rounded-lg">
        <div className="flex flex-col px-4 justify-center items-center">
          <HeaderSection addTask={addTask} setFilter={setFilter} />
          <ListSection
            tasks={filteredTasks}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
