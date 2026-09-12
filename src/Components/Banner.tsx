import React from "react";
import BannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="mt-30 flex-1 md:flex justify-between ">
      <div className="space-y-5">
        {/* Heading */}
        <h1 className=" text-4xl md:text-6xl font-bold leading-tight text-[#111827]">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="font-normal md: text-[14px]text-[18px] text-[#475569]">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>
        <div className=" flex flex-col md:flex-row gap-5">
          <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6B1A] to-[#EC4899] text-white font-semibold ">
            Explore Technologies
          </button>
          <button className="px-5 py-3 border-2 border-gray-200 rounded-xl bg-white">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img className="w-[500px] h-[380px]" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
