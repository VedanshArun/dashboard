import React from "react";
import { BentoGridComponent } from "./bento-grid-component";

export default function GridBackground() {
  return (
    <div className="h-screen w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.03] relative flex items-center justify-evenly">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className=" w-[800px] text-black text-4xl relative z-20 font-extrabold tracking-tight lg:text-7xl lg:leading-snug ml-14">
            Supporting Health Heroes: Empower Healthcare Through Your Generosity.
        </h1>
        <BentoGridComponent/>
    </div>
  );
}
