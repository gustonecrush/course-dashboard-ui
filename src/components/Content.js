import React from "react";
import CourseProgressCard from "./CourseProgressCard";
import OngoingCompetitionsCard from "./OngoingCompetitionsCard";

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
    participants: [
      { id: 1, name: "Izhar", profile: "pic.png" },
      { id: 2, name: "Adam", profile: "pic-1.png" },
      { id: 3, name: "Rika", profile: "pic-2.png" },
      { id: 4, name: "Marsha", profile: "pic-3.png" },
      { id: 5, name: "Isa", profile: "pic-4.png" },
      { id: 6, name: "Izhar", profile: "pic.png" },
      { id: 7, name: "Adam", profile: "pic-1.png" },
      { id: 8, name: "Rika", profile: "pic-2.png" },
      { id: 9, name: "Marsha", profile: "pic-3.png" },
      { id: 10, name: "Isa", profile: "pic-4.png" },
      { id: 11, name: "Izhar", profile: "pic.png" },
      { id: 12, name: "Adam", profile: "pic-1.png" },
      { id: 13, name: "Rika", profile: "pic-2.png" },
      { id: 14, name: "Marsha", profile: "pic-3.png" },
      { id: 15, name: "Isa", profile: "pic-4.png" },
    ],
  },
  {
    id: 2,
    name: "Charity Website",
    totalPrize: 0,
    desc: "Helping elders to get what their needs from people in the world",
    participants: [
      { id: 1, name: "Izhar", profile: "pic.png" },
      { id: 2, name: "Adam", profile: "pic-1.png" },
      { id: 3, name: "Rika", profile: "pic-2.png" },
    ],
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
        <div class="flex mt-7">
          {ongoings.map((item, index) => (
            <OngoingCompetitionsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
