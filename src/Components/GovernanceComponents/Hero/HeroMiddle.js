import React from "react";
import { proposal } from "../../../Constants/Constant";
import Card from "../Card/Card";
const HeroMiddle = () => {
  return (
    <>
      <div className="w-full text-black  my-11 rounded-xl bg-white">
        <div className="px-4 py-3  text-xl font-semibold">Recent Proposals</div>
        {proposal.map((item) => {
          return (
            <Card
              title={item.title}
              id={item.id}
              status={item.status}
              time={item.time}
            />
          );
        })}
        <div className="flex px-5 py-2 justify-center font-semibold hover:text-green-600 cursor-pointer">View all proposals</div>
      </div>
    </>
  );
};

export default HeroMiddle;
