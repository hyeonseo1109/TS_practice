import { Button } from "./Button";

export interface NormalCardProps {
  title: string;
  description: string;
  size?: string;
}

export default function NormalCards({
  title,
  description,
  size = "w-[24rem] h-auto",
}: NormalCardProps) {
  return (
    <>
      <div
        className={`flex flex-col gap-2 border-2 bg-white border-gray-200 rounded-lg p-[1.5625rem] select-none ${size} `}
      >
        <p className="text-[1.125rem] font-bold">{title}</p>
        <p className="[word-break:keep-all]">{description}</p>
        <div className="flex justify-end">
          <Button children={"더보기"} size="sm" />
        </div>
      </div>
    </>
  );
}
