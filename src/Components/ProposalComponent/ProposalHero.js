import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { votings, proposal } from "../../Constants/Constant";
const ProposalHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProposal, setCurrentProposal] = useState([
    {
      id: "dummy",
      proposal: "dummy",
      time: "dummy",
      status: "dummy",
    },
  ]);
  // const [currentProposal, setCurrentProposal] = useState([]);
  useEffect(() => {
    let tempProposal = proposal.filter((item) => {
      return item.id == id;
    });
    setCurrentProposal(tempProposal);
  }, []);

  return (
    <div className="px-40 text-white mb-44">
      <div className="flex items-center hover: cursor-pointer" onClick={()=>{navigate("/governance")}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span className="ml-4 font-semibold text-lg">Overview</span>
      </div>
      <div className="mt-6 w-full ">
        <div className="text-3xl text-[#bdc0c2] font-semibold w-3/5 ">
          {currentProposal.length > 0 ? currentProposal[0].title : null}
        </div>
        <div>
          <div>
            <button
              className={`border ${
                currentProposal[0].status == "Executed"
                  ? "text-green-400 border-green-400"
                  : "text-[#727577] border-[#727577]"
              } px-3 mr-3 py-0 mt-1 rounded-[4px] font-medium`}
            >
              {currentProposal[0].status == "Executed" ? "Passed" : "Failed"}
            </button>
            <span className="text-grey font-semibold text-sm text-[#727577]">
              152 : {currentProposal[0].time}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-row justify-between gap-4 ">
        <div className="w-1/2 bg-white text-black rounded px-4 py-4">
          <div className="flex justify-between text-md text-black font-bold">
            <div>For</div>
            <div>462,534</div>
          </div>
          <div className="h-1 w-full bg-green-500 mt-3"></div>
          <div className="flex justify-between mt-10 font-semibold text-[grey] border-t py-2">
            <div>28 Addresses</div>
            <div>Votes</div>
          </div>
          <div className="flex justify-between mt-2 py-2 font-semibold text-[black] border-t ">
            <div>Lorem ipsum dolor sit amet.</div>
            <div>4349894</div>
          </div>
          <div className="flex justify-between mt-2 py-2 font-semibold text-[black] border-t ">
            <div>Lorem, ipsum dolor.</div>
            <div>4349894</div>
          </div>
          <div className="flex justify-between mt-2 py-2 font-semibold text-[black] border-t ">
            <div>Lorem ipsum dolor sit amet consectetur.</div>
            <div>4349894</div>
          </div>
          <div className="flex justify-between mt-2 py-2 font-semibold text-[black] border-t ">
            <div>Lorem, ipsum.</div>
            <div>4349894</div>
          </div>
          <div className="flex justify-between mt-2 py-2 font-semibold text-[black] border-t ">
            <div>Lorem, ipsum dolor.</div>
            <div>4349894</div>
          </div>
        </div>
        <div className="w-1/2 bg-white text-black rounded px-4 py-4">
          <div className="flex justify-between text-md text-black font-bold">
            <div>Against</div>
            <div>0</div>
          </div>
          <div className="h-1 w-full bg-[#cfcdcd] mt-3"></div>
          <div className="flex justify-between mt-10 font-semibold text-[grey] border-t py-2">
            <div>0 Addresses</div>
            <div>Votes</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProposalHero;
