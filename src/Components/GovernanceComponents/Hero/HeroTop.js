import React from 'react'

const HeroTop = () => (
    <>
    <div className="text-3xl font-medium ">Governance Overview</div>
    <div className="flex flex-row justify-between w-full   py-3 my-3">
      <div className="w-1/2 bg-[#141E27] px-6 py-5 rounded">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">2,353,566</div>
          <div className="flex text-green-400 font-semibold">
            VIEW{" "}
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-[#727577] font-semibold">
            COMP Remaining
          </div>
          <div className="flex justify-start mx-3 gap-0 w-[180px]">
            <div className="h-1 w-4/5 my-2 bg-green-400"></div>
            <div className="h-1 w-2/5 my-2 bg-green-900"></div>
          </div>
        </div>
      </div>
      <div className="w-52  bg-[#141E27] px-4 py-4 rounded">
        <div className="text-2xl font-semibold">2,353,566</div>
        <div className="text-sm text-[#727577] font-semibold">
          Votes Delegated
        </div>
      </div>
      <div className="w-52  bg-[#141E27] px-4 py-4 rounded">
      <div className="text-2xl font-semibold">2,353,566</div>
        <div className="text-sm text-[#727577] font-semibold">
          COMP Remaining
        </div>
      </div>
    </div>
    </>
)

export default HeroTop