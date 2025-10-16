import "../App.css";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Option {
  text: string;
  icon?: React.ReactNode;
}

export interface DropDownProps {
  title: string;
  placeholder: string;
  options: Option[];
  xButton?: boolean;
  // xButton에 관한 내용 없을 시 그냥 false가 기본값으로 먹힘
  size?: "sm" | "md" | "lg";
}

export function DropDown({
  title,
  placeholder,
  options,
  xButton = false,
  size = "md",
}: DropDownProps) {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const sizeStyles = {
    sm: {
      container: "w-[25rem]",
      dropDown: "w-[21.875rem]",
      height: "h-[2.5rem]",
    },
    md: {
      container: "w-[37rem]",
      dropDown: "w-[33.875rem]",
      height: "h-[2.875rem]",
    },
    lg: {
      container: "w-[50rem]",
      dropDown: "w-[46.875rem]",
      height: "h-[3.25rem]",
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <>
      <div
        className={`flex flex-col justify-between border border-gray-200 bg-white ${currentSize.container} h-[8.75rem] p-[1.5625rem] rounded-md select-none`}
      >
        <div className="flex items-start justify-between w-full">
          <p className="font-[500] text-[1.125rem] text-center">{title}</p>
          <span>{xButton && <X />}</span>
        </div>
        <div
          tabIndex={0}
          onBlur={() => setDropDownState(false)}
          className="relative"
        >
          <div
            onClick={() => setDropDownState(!dropDownState)}
            className={`flex ${currentSize.dropDown} ${
              currentSize.height
            } px-[1.0625rem] py-[.8125rem] justify-between items-center border-[.0938rem] border-gray-200 rounded-lg relative  ${
              dropDownState && "border-gray-400"
            }`}
          >
            <p className="text-[.875rem] text-gray-500 font-light">
              {selectedOption || placeholder}
            </p>
            {dropDownState ? (
              <ChevronUp size={15} color="gray" />
            ) : (
              <ChevronDown size={15} color="gray" />
            )}
          </div>
          {dropDownState && (
            <div
              className={`bg-white border-[.0938rem] border-gray-200 rounded-lg shadow-[0_0.25rem_0.5rem_#00000020] absolute top-[${currentSize.height}] ${currentSize.dropDown} max-h-[12rem] overflow-y-auto overflow-x-hidden z-10`}
            >
              {options?.map((option) => (
                <div
                  key={option.text}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setDropDownState(false);
                    setSelectedOption(option.text);
                  }}
                  className={`flex items-center ${currentSize.dropDown} ${
                    currentSize.height
                  } px-[1.0625rem] py-[.8125rem] font-light hover:bg-gray-50 active:bg-gray-100
                    ${option.icon && "gap-2.5"}`}
                >
                  <span>{option.icon}</span>
                  <span>{option.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
