import React from "react";
import ScrollLeftRight from "./scroll-left-right";

const StoriesSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full flex-col">
        <h1 className="text-white text-7xl w-[550px] text-center font-thin">
          Serious stories with funny works
        </h1>

        <div className="my-10 ">
          <button className="py-2 px-6 hover:border-white border-slate-400 border text-white rounded-xl">
            discover our services
          </button>
        </div>
      </div>
      <ScrollLeftRight />
    </div>
  );
};

export default StoriesSection;
