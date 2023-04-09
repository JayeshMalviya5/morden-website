import React from "react";
import { votings } from "../../../Constants/Constant";
const HeroBottom = () => {
  return (
    <>
      <div className="w-full text-black  my-11 rounded-lg bg-white">
        <div className="px-4 py-3  text-xl font-semibold">
          Top Addresses by Voting Weight
        </div>
        <div className="border-t px-10 py-2 flex text-sm font-semibold justify-between text-[#727577]">
          <div>Rank</div>
          <div className="flex justify-end gap-14">
            <div>Votes</div>
            <div>Vote Weight</div>
            <div>Proposals Voted</div>
          </div>
        </div>
        {votings.map((item) => {
          return (
            <div className="border-t px-10 py-6 flex justify-between font-semibold text-md">
              <div className="flex items-center gap-9 w-3/6 justify-start">
                <div>{item.id}</div>
                <div>
                  {
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                </div>
                <div>{item.title}</div>
              </div>
              <div className="flex w-[380px] justify-end ">
                <div className="text-right mr-24 ">{item.votes}</div>
                <div className="text-right mr-36">{item.voteWeight}</div>
                <div className="text-right  ">{item.proposals}</div>
              </div>
            </div>
          );
        })}
        <div className="flex px-5 py-2 justify-center font-semibold hover:text-green-600 cursor-pointer">
          View Leaderboard
        </div>
      </div>
      <div className="w-full text-black flex  my-11 rounded-lg bg-white ">
        <div className="w-1/2 flex flex-col px-8 py-6 gap-5">
          <div className="text-xl font-semibold ">Compound governance</div>
          <div className="text-[#727577] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil
            eaque perspiciatis voluptatum sit autem, unde libero molestiae
            eveniet blanditiis laborum dolore officiis.
          </div>
          <div className="flex text-green-600 font-semibold hover: cursor-pointer">
            Learn More{" "}
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
        <div className="bg-black w-1/2 h-60 border">

        </div>
      </div>
    </>
  );
};

export default HeroBottom;
