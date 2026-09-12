import React from "react";
import type { TechnologiesType } from "../types";
import TechnologyCard from "./TechnologyCard";
interface ExploreTechnologiesProps {
  technologies: TechnologiesType[];
}
const ExploreTechnologies = ({ technologies }: ExploreTechnologiesProps) => {
  return (
    <div>
      {technologies.map((technology: TechnologiesType) => {
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          ></TechnologyCard>
        );
      })}
    </div>
  );
};

export default ExploreTechnologies;
