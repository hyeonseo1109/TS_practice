export interface ImageCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  size?: string;
}

export default function ImageCards({
  title,
  description,
  date,
  imageUrl,
  size = "w-[24rem] h-[17.375rem]",
}: ImageCardProps) {
  return (
    <>
      <div
        className={`${size} relative rounded-lg select-none hover:shadow-[0_0_.9375rem_#00000020] hover:transition-all duration-300 hover:-translate-y-[.3rem]`}
      >
        <img className="w-full h-full rounded-lg object-cover" src={imageUrl} />
        <div
          className={`flex flex-col gap-3 border-2 border-gray-200 bg-white rounded-b-lg p-[1.5625rem] absolute bottom-0 w-full `}
        >
          <p className="text-[1.125rem] font-bold">{title}</p>
          <p className="[word-break:keep-all]">{description}</p>
          <div className="flex justify-between">
            <p className="text-[.875rem] font-light text-gray-500">{date}</p>
            <button className="text-primary-600 hover:text-primary-700 active:text-primary-800">
              읽어보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
