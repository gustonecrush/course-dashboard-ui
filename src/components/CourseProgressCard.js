import Image from "next/image";
import React from "react";

function CourseProgressCard({ course }) {
  console.log(course);
  return (
    <div
      className={`bg-[${course?.colorBg}] mt-8 p-8 rounded-lg flex flex-col items-center justify-center mr-4`}
    >
      <Image
        src={"/chart/" + course?.chart}
        width={80}
        height={80}
        alt={course?.name}
        className="mb-5 mt-2"
      />
      <div className="flex flex-col items-center">
        <h1>{course?.name}</h1>
        <p className={`text-[0.85rem] font-[300] text-[${course?.colorText}]`}>
          {course?.videos} videos
        </p>
      </div>
    </div>
  );
}

export default CourseProgressCard;
