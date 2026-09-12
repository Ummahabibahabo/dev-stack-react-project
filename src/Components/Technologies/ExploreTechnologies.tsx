import React from "react";
import type { TechnologiesType } from "../types";
import TechnologyCard from "./TechnologyCard";
import StackSelectedCard from "./StackSelectedCard";
interface ExploreTechnologiesProps {
  technologies: TechnologiesType[];
  yourStack: TechnologiesType[];
  setYourStack: React.Dispatch<React.SetStateAction<TechnologiesType[]>>;
}
const ExploreTechnologies = ({
  technologies,
  yourStack,
  setYourStack,
}: ExploreTechnologiesProps) => {
  const handleRemoveAll = () => {
    setYourStack([]);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {technologies.map((technology: TechnologiesType) => {
          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              yourStack={yourStack}
              setYourStack={setYourStack}
            ></TechnologyCard>
          );
        })}
      </div>
      {/* Your-Stack */}
      <div className="border-2 border-gray-300 rounded-xl p-5 bg-white shadow-lg space-y-5 h-fit">
        <h1 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h1>

        <p className="font-normal text-[14px] text-[#94A3B8]">
          {yourStack.length === 0
            ? "No Technologies selected yet."
            : `${yourStack.length} Technology Selected`}
        </p>
        {yourStack.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-xl text-center py-5 ">
            <p className="font-normal text-[14px] text-[#94A3B8]">
              Your stack is empty
            </p>
          </div>
        ) : (
          <div>
            <StackSelectedCard
              yourStack={yourStack}
              setYourStack={setYourStack}
            ></StackSelectedCard>
            <button
              onClick={handleRemoveAll}
              className="border-2 border-red-700 text-[#D82C20] text-[14px]
            px-3 py-1 rounded-xl w-full text-center mt-5"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreTechnologies;
