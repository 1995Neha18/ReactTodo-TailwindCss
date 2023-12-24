
// import React from "react";

// const ListSection = ({ tasks, toggleTaskCompletion }) => {
//   return (
//     <div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             className={`flex items-center justify-between p-2 ${
//               task.completed ? "line-through text-gray-500" : ""
//             }`}
//           >
//             <span>{task.text}</span>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskCompletion(index)}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListSection;

import React from "react";

const ListSection = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="w-[50%] h-[90%] mx-auto">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
