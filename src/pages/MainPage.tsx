import { DropDown } from "./dropDown";
import { RiBookLine } from "react-icons/ri";
import { IoIosCode } from "react-icons/io";
import { RiPaletteLine } from "react-icons/ri";

export default function MainPage() {
  const dummyData = {
    title: "기본 드롭다운",
    placeholder: "카테고리를 선택하세요",
    options: [
      { text: "스터디", icon: <RiBookLine /> },
      { text: "프로젝트", icon: <IoIosCode /> },
      { text: "취미", icon: <RiPaletteLine /> },
    ],
    xButton: true,
  };
  return (
    <>
      <div className="w-full flex justify-center my-19">
        <DropDown
          title={dummyData.title}
          placeholder={dummyData.placeholder}
          options={dummyData.options}
          xButton={dummyData.xButton}
        />
      </div>
    </>
  );
}
