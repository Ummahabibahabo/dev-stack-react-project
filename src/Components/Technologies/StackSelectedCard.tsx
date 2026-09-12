import React from "react";
import type { TechnologiesType } from "../types";
import DeleteIcon from "../../assets/delete.png";
import { toast } from "react-toastify";
interface StackSelectedProps {
  yourStack: TechnologiesType[];
  setYourStack: React.Dispatch<React.SetStateAction<TechnologiesType[]>>;
}
const StackSelectedCard = ({ yourStack, setYourStack }: StackSelectedProps) => {
  const handleDeleteButton = (name: string) => {
    const remaingTechnology = yourStack.filter(
      (technology) => technology.name !== name,
    );
    setYourStack(remaingTechnology);
  };
  return (
    <div className="space-y-5">
      {yourStack.map((technology: TechnologiesType) => {
        return (
          <div>
            <div className="border-2 border-gray-300 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-5">
                  <img
                    className="w-[30px] h-[30px]"
                    src={technology.icon}
                    alt=""
                  />
                  <div>
                    <h1 className="font-bold text-[#0F172A] text-[14px]">
                      {technology.name}
                    </h1>
                    <p className="font-bold text-[#94A3B8] text-[10px]">
                      {technology.category}
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => handleDeleteButton(technology.name)}
                  className="w-[15px] h-[15px]"
                  src={DeleteIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StackSelectedCard;
