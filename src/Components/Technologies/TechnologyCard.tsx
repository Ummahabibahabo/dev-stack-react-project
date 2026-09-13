import React from "react";
import type { TechnologiesType } from "../types";
import CoinImg from "../../assets/fi_2107957.png";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: TechnologiesType;
  yourStack: TechnologiesType[];
  setYourStack: React.Dispatch<React.SetStateAction<TechnologiesType[]>>;
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

const TechnologyCard = ({
  technology,
  yourStack,
  setYourStack,
}: TechnologyCardProps) => {
  // Check selected technology using filter
  const selectedTechnology = yourStack.filter(
    (item) => item.name === technology.name,
  );

  const isSelected = selectedTechnology.length > 0;

  const handleAddButton = () => {
    if (isSelected) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setYourStack([...yourStack, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  return (
    <div className="h-full">
      <div className="border-2 border-gray-200 rounded-xl p-5 bg-white shadow-lg space-y-5 h-full flex flex-col">
        {/* Icon + Badge */}
        <div className="flex justify-between items-center">
          <img
            className="w-[30px] h-[28px]"
            src={technology.icon}
            alt={technology.name}
          />

          <button
            className={`px-3 py-1 text-xs rounded-full border font-semibold ${
              badgeColors[technology.badge]
            }`}
          >
            {technology.badge}
          </button>
        </div>

        {/* Name */}
        <h1 className="font-bold text-[18px] text-[#0F172A]">
          {technology.name}
        </h1>

        {/* Description */}
        <p className="font-normal text-[12px] text-[#64748B]">
          {technology.description}
        </p>

        {/* Category + Difficulty + Rating */}
        <div className="flex justify-between items-center">
          <button className="text-[#475569] bg-[#F1F5F9] px-3 py-1 rounded-xl">
            {technology.category}
          </button>

          <button className="text-[#64748B]">{technology.difficulty}</button>

          <button className="text-[#334155] font-semibold flex items-center gap-2">
            <img className="w-5 h-5" src={CoinImg} alt="coin" />

            <span>{technology.rating}</span>
          </button>
        </div>

        {/* Add / Selected Button */}
        <button
          onClick={handleAddButton}
          className={
            isSelected
              ? "text-black bg-gray-300 px-3 py-2 rounded-xl w-full mt-auto font-semibold"
              : "text-white bg-black px-3 py-2 rounded-xl w-full mt-auto font-semibold"
          }
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
