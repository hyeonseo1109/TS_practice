import ImageCards, { type ImageCardProps } from "../commonComponent/ImageCards";
import NormalCards from "../commonComponent/NormalCards";
import { type NormalCardProps } from "../commonComponent/NormalCards";
import type { StatCardProps } from "../commonComponent/StatCards";
import StatCards from "../commonComponent/StatCards";

export default function CardsPage() {
  const NormalData: NormalCardProps[] = [
    {
      id: 1,
      title: "카드 제목",
      description: "카드 내용이 들어갑니다. 다양한 정보를 표시할 수 있습니다.",
    },
    { id: 2, title: "두 번째 카드", description: "두 번째 설명" },
  ];

  const ImageData: ImageCardProps[] = [
    {
      id: 1,
      title: "이미지 카드",
      description: "이미지와 함께 표시되는 카드입니다.",
      date: "2024.01.15",
      imageUrl: "/testImage.png",
    },
    {
      id: 2,
      title: "강아지 이미지",
      description: "강아지입니다",
      date: "2025.10.16",
      imageUrl: "/dog.jpeg",
    },
    {
      id: 3,
      title: "민섭 성형 전",
      description: "ㄷㄷ",
      date: "2025.10.16",
      imageUrl: "/isThisReal.png",
    },
  ];

  const StatData: StatCardProps[] = [
    { id: 1, title: "총 스터디", headCount: 24, percentage: 12 },
    { id: 2, title: "총 감소", headCount: 14, percentage: -9 },
    { id: 3, title: "총 야옹", headCount: 120, percentage: 0 },
  ];
  return (
    <div className="flex flex-col gap-20 m-15">
      <div className="flex gap-10 w-full p-5">
        {NormalData.map((data) => (
          <NormalCards
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex gap-10 w-full p-5 flex-wrap">
        {ImageData.map((data) => (
          <ImageCards
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            date={data.date}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>
      <div className="flex gap-10 w-full p-5 flex-wrap">
        {StatData.map((data) => (
          <StatCards
            key={data.id}
            id={data.id}
            title={data.title}
            headCount={data.headCount}
            percentage={data.percentage}
          />
        ))}
      </div>
    </div>
  );
}
