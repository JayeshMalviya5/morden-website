import React from "react";
import { navitems } from "../../../Constants/Constant";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-start bg-[black] px-16 py-5 h-[450px]">
      <div className="text-white my-2 h-2 hover:cursor-pointer">
        <img src="logo.jpeg" alt="logo" srcset="" />
      </div>
      <div className="flex  flex-row my-2 gap-10 text-white list-none h-2 hover:cursor-pointer font-medium">
        {navitems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
      <div>
        <button className="text-green-400 border px-6 py-2 rounded-[24px] border-green-400 font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default Navbar;
