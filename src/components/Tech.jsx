/**
 * @ Author: Adam Zhang
 * @ Create Time: 2023-02-27 10:41:26
 * @ Modified by: Adam Zhang
 * @ Modified time: 2023-06-09 11:25:59
 * @ Description: 3D balls of technology 
 * 主要用来狂拽酷炫吊炸天的展示技术栈
 */

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");