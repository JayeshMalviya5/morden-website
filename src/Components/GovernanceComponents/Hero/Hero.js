import { Progress } from "@chakra-ui/react";
import React from "react";
import HeroTop from "./HeroTop";
import HeroMiddle from "./HeroMiddle";
import HeroBottom from "./HeroBottom";

const Hero = () => (
  <div className="text-white  px-[200px] w-full">
    <HeroTop />
    <HeroMiddle />
    <HeroBottom />
  </div>
);

export default Hero;
