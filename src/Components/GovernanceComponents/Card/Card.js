import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, status, id, time }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row px-10 justify-between py-5 border" onClick={()=>{
      navigate(`/governance/proposal/${id}`)
    }} >
      <div className="hover: cursor-pointer">
        <div className="w-10/12  font-semibold text-lg">{title}</div>
        <div>
          <button
            className={`border ${
              status == "Executed"
                ? "text-green-400 border-green-400"
                : "text-[#727577] border-[#727577]"
            } px-3 mr-3 py-0 mt-1 rounded-[4px] font-medium`}
          >
            {status == "Executed" ? "Passed" : "Failed"}
          </button>
          <span className="text-grey font-semibold text-sm text-[#727577]">
            152 : {time}
          </span>
        </div>
      </div>
      <div className="flex hover: cursor-pointer mt-6 items-center  h-10 px-1 py-2">
        {status == "Executed" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00FF7F" // set the fill color to light green
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#00FF7F" // set the stroke color to light green
            className="w-8 h-8 mr-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"    // set the fill color to grey
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#808080"   // set the stroke color to grey
            className="w-8 h-8 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}

        <span
          className={`${
            status == "Executed"
              ? "text-green-400 border-green-400"
              : "text-[#727577] border-[#727577]"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
// border-green-400
export default Card;
