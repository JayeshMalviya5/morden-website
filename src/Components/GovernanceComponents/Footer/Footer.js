import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" px-[40px] py-8  bg-black h-80 text-white">
        <div className="flex justify-between border-b pb-8 border-[grey]">
          <div >
            <img src="logo.png" alt="Logo" srcset="" />
          </div>
          <div className="flex justify-between gap-32 mr-64">
            <div className="gap-5 flex flex-col">
              <div className="text-lg font-semibold">Compound ll</div>
              <div className="text-[#727577] font-semibold text-sm">App</div>
              <div className="text-[#727577] font-semibold text-sm">Market</div>
              <div className="text-[#727577] font-semibold text-sm">Documentation</div>
              <div className="text-[#727577] font-semibold text-sm">Security</div>
            </div>
            <div className="gap-5 flex flex-col">
              <div className="text-lg font-semibold">Compound ll</div>
              <div className="text-[#727577] font-semibold text-sm">App</div>
              <div className="text-[#727577] font-semibold text-sm">Market</div>
              <div className="text-[#727577] font-semibold text-sm">Documentation</div>
              <div className="text-[#727577] font-semibold text-sm">Security</div>
            </div>
            <div className="gap-5 flex flex-col">
              <div className="text-lg font-semibold">Governance</div>
              <div className="text-[#727577] font-semibold text-sm">Dashboards</div>
              <div className="text-[#727577] font-semibold text-sm">Proposal</div>
              <div className="text-[#727577] font-semibold text-sm">Forums</div>
              <div className="text-[#727577] font-semibold text-sm">LeaderBoard</div>
            </div>
          </div>
          <div>
            <button className="border px-6 py-2 font-bold rounded-3xl border-green-400 text-green-400">App</button>
          </div>
          
        </div>
        
        <div>
        <div className="text-[#727577] mt-5 font-semibold text-sm">2022 Compound Labs, Inc.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
