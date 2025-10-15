import "../App.css";
import { VscChromeClose } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";

interface Option {
  text: string;
  icon?: React.ReactNode;
}

interface DropDownProps {
  title: string;
  placeholder: string;
  options: Option[];
  xButton?: boolean;
  // xButton에 관한 내용 없을 시 그냥 false가 기본값으로 먹힘
}

export function DropDown({
  title,
  placeholder,
  options,
  xButton = false,
}: DropDownProps) {
  return (
    <>
      <div className="flex flex-col justify-between border border-gray-200 bg-white w-[37rem] h-[8.75rem] p-[1.5625rem] rounded-md">
        <div className="flex items-start justify-between w-full">
          <p className="font-[500] text-[1.125rem] text-center">{title}</p>
          <span>{xButton && <VscChromeClose />}</span>
        </div>
        <div className="relative">
          <div className="flex w-[33.875rem] h-[2.875rem] px-[1.0625rem] py-[.8125rem] justify-between items-center border-[.0938rem] border-gray-200 rounded-lg relative">
            <p className="text-[.875rem] text-gray-500 font-light">
              {placeholder}
            </p>
            <FaAngleDown size={15} color="gray" />
          </div>
          <div className="bg-white border-[.0938rem] border-gray-200 rounded-lg shadow-[0_0.25rem_0.5rem_#00000020] absolute top-[2.875rem]">
            {options?.map((option) => (
              <div className="flex items-center gap-2.5 w-[33.7812rem] h-[2.875rem] px-[1.0625rem] py-[.8125rem] font-light">
                <span>{option.icon}</span>
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
