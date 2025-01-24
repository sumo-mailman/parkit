// import React from "react";

// const Dropdown = ({
//   items,
//   onSelect,
// }: {
//   items: {string[]};
//   onSelect: (item: string) => void;
// }) => {
//   if (!items || items.length === 0) return null;

//   return (
//     <div className="mt-2 w-full max-w-md rounded-md border border-gray-700 bg-gray-800 shadow-lg">
//       <ul className="divide-y divide-gray-700">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => onSelect(item)}
//             className="cursor-pointer px-4 py-2 text-white hover:bg-gray-700"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;
