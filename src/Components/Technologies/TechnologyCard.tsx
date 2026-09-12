import React, { useState } from "react";
import type { TechnologiesType } from "../types";
import CoinImg from "../../assets/fi_2107957.png";

interface TechnologyCardProps {
  technology: TechnologiesType;
}

const badgeColors: Record<string, string> = {
  Popular: "text-sky-500 bg-sky-50 border-sky-100",
  Versatile: "text-emerald-500 bg-emerald-50 border-emerald-100",
  Fast: "text-orange-500 bg-orange-50 border-orange-100",
  Standard: "text-green-500 bg-green-50 border-green-100",
  "Top SQL": "text-blue-500 bg-blue-50 border-blue-100",
  Cache: "text-red-500 bg-red-50 border-red-100",
  Ubiquitous: "text-yellow-600 bg-yellow-50 border-yellow-100",
  Essential: "text-cyan-500 bg-cyan-50 border-cyan-100",
  Robust: "text-[#0284C7] bg-[#E0F2FE]",
  Modern: "text-[#0891B2] bg-[#CFFAFE]",
  Containers: "text-[#0284C7] bg-[#E0F2FE]",
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const [addButton, setAddButton] = useState<boolean>(false);
  const handleAddButton = () => {
    setAddButton(true);
  };
  return (
    <div className="h-full">
      <div className="border-2 border-gray-300 rounded-xl p-5 bg-white shadow-lg space-y-5 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <img className="w-[30px] h-[28px]" src={technology.icon} alt="" />

          <button
            className={`px-3 py-1 text-xs rounded-full border font-semibold ${
              badgeColors[technology.badge]
            }`}
          >
            {technology.badge}
          </button>
        </div>

        <h1 className="font-bold text-[18px] text-[#0F172A]">
          {technology.name}
        </h1>

        <p className="font-normal text-[12px] text-[#64748B]">
          {technology.description}
        </p>

        <div className="flex justify-between items-center">
          <button className="text-[#475569] bg-[#F1F5F9] px-3 py-1 rounded-xl">
            {technology.category}
          </button>

          <button className="text-[#64748B]">{technology.difficulty}</button>

          <button className="text-[#334155] font-semibold flex items-center gap-2">
            <img className="w-5 h-5" src={CoinImg} alt="" />
            <span>{technology.rating}</span>
          </button>
        </div>

        <button
          onClick={handleAddButton}
          className={
            addButton
              ? "text-black bg-gray-300 px-3 py-2 rounded-xl w-full mt-auto font-semibold"
              : "text-white bg-black px-3 py-2 rounded-xl w-full mt-auto font-semibold"
          }
        >
          {addButton ? "Selected" : " Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
