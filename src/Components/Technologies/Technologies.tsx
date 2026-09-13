import { use, useState } from "react";
import type { TechnologiesType } from "../types";
import ExploreTechnologies from "./ExploreTechnologies";
interface TechnologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [yourStack, setYourStack] = useState<TechnologiesType[]>([]);
  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-4xl text-[#0F172A] font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[16px]font-normal text-[#64748B] mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <ExploreTechnologies
        technologies={technologies}
        yourStack={yourStack}
        setYourStack={setYourStack}
      ></ExploreTechnologies>
    </div>
  );
};

export default Technologies;
