import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";

export interface StatCardProps {
  title: string;
  headCount: number;
  percentage: number;
  size?: string;
}

export default function StatCards({
  title,
  headCount,
  percentage,
  size = "w-[24rem] h-auto",
}: StatCardProps) {
  return (
    <>
      <div
        className={`flex justify-between border-2 bg-white border-gray-200 rounded-lg p-[1.5625rem] select-none ${size} `}
      >
        <div className="flex flex-col gap-1">
          <p className="text-[.875rem]">{title}</p>
          <p className="text-[1.875rem] font-extrabold">{headCount}</p>
          {percentage > 0 ? (
            <p className="text-[.875rem] text-success-600 flex items-center gap-1">
              <FaArrowUp size={15} color="color-success-600" /> +{percentage}%
              증가
            </p>
          ) : percentage < 0 ? (
            <p className="text-[.875rem] text-danger-600 flex items-center gap-1">
              <FaArrowDown size={15} /> {percentage}% 감소
            </p>
          ) : (
            <p className="text-[.875rem] text-gray-400">
              {percentage}% 변화 없음
            </p>
          )}
        </div>
        <div className="bg-primary-100 w-[3rem] h-[3rem] rounded-full flex self-center text-primary-600 items-center justify-center">
          <BsPeople size={25} />
        </div>
      </div>
    </>
  );
}
