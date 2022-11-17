import Image from "next/image";
import React from "react";

function Participants({ participant }) {
  return (
    <a href="" className={`${participant?.id !== 1 ? "-ml-4" : ""}`}>
      <Image
        src={"/images/participants/" + participant?.profile}
        alt={participant?.name}
        width={40}
        height={40}
        className={`rounded-full `}
      />
    </a>
  );
}

export default Participants;
