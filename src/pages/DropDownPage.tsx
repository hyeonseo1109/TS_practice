import { DropDown, type DropDownProps } from "../commonComponent/dropDown";
import { Book } from "lucide-react";
import { Code } from "lucide-react";
import { Palette } from "lucide-react";

export default function DropDownPage() {
  const dummyData1: DropDownProps = {
    title: "기본 드롭다운",
    placeholder: "옵션을 선택하세요",
    options: [{ text: "옵션 1" }, { text: "옵션 2" }, { text: "옵션 3" }],
  };

  const dummyData2: DropDownProps = {
    title: "아이콘 드롭다운",
    placeholder: "카테고리를 선택하세요",
    options: [
      { text: "스터디", icon: <Book /> },
      { text: "프로젝트", icon: <Code /> },
      { text: "취미", icon: <Palette /> },
      { text: "111", icon: <Palette /> },
      { text: "222", icon: <Palette /> },
      { text: "333", icon: <Palette /> },
      { text: "444", icon: <Palette /> },
      { text: "555", icon: <Palette /> },
    ],
    xButton: true,
  };

  return (
    <div className="flex flex-col gap-20 m-10 ">
      <div className="flex flex-col gap-20">
        <DropDown
          size="sm"
          title={dummyData1.title}
          placeholder={dummyData1.placeholder}
          options={dummyData1.options}
        />
        <DropDown
          title={dummyData2.title}
          placeholder={dummyData2.placeholder}
          options={dummyData2.options}
          xButton={dummyData2.xButton}
        />
      </div>
      <div>
        <DropDown
          size="lg"
          title={dummyData2.title}
          placeholder={dummyData2.placeholder}
          options={dummyData2.options}
          xButton={dummyData2.xButton}
        />
      </div>
    </div>
  );
}
