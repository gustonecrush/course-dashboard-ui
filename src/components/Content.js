import React from "react";
import CourseProgressCard from "./CourseProgressCard";

const courses = [
  {
    id: 1,
    name: "HTML 5 Design",
    videos: 140,
    colorText: "#856B6E",
    colorBg: "#B46F78",
    chart: "chart.svg",
  },
  {
    id: 2,
    name: "UI/UX Design",
    videos: 847,
    colorText: "#5843BE",
    colorBg: "#D6D2E9",
    chart: "chart-1.svg",
  },
  {
    id: 3,
    name: "Copywriting",
    videos: 21,
    colorText: "#1A55AF",
    colorBg: "#D2E2F1",
    chart: "chart-2.svg",
  },
  {
    id: 4,
    name: "Mobille Apps",
    videos: 535,
    colorText: "#427A0A",
    colorBg: "#EBE6D8",
    chart: "chart-3.svg",
  },
];

const ongoings = [
  {
    id: 1,
    name: "Design & Build Finance App",
    totalPrize: 28600870,
    desc: "Solving the problems that appear in the new era of technology world. We need come with the mobile frie...",
    participants: [],
  },
  {
    id: 2,
    name: "Charity Website",
    totalPrize: 0,
    desc: "Helping elders to get what their needs from people in the world",
    participants: [],
  },
];

function Content() {
  const Heading = ({ title }) => {
    return <h1 className="font-[600] text-[1.8rem]">{title}</h1>;
  };

  return (
    <div className="flex flex-col w-full px-[45px] py-5 mt-8">
      <div class="course-section px-15 py-5 flex flex-col mb-1">
        <Heading title={"Courses Progress"} />
        <div class="flex">
          {courses.map((item, index) => (
            <CourseProgressCard course={item} key={index} />
          ))}
        </div>
      </div>

      <div class="ongoing-section px-15 py-5 flex flex-col mb-5">
        <Heading title={"Ongoing Competitions"} />
      </div>
    </div>
  );
}

export default Content;
