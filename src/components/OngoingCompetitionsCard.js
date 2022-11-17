import Image from "next/image";
import React from "react";
import Button from "./Button";
import Participants from "./Participants";

function OngoingCompetitionsCard({ item }) {
  return (
    <div className="bg-[#F6F7F8] rounded-lg p-6 w-5/12 mr-5">
      <h1 className="text-[1.5rem] font-[600]">{item?.name}</h1>
      <p className="text-[0.95rem] mt-1 font-[300] text-[#989BA1]">
        Total Prize ${item?.totalPrize}
      </p>
      <p className="mt-7 text-[.95rem] h-[75px] text-justify font-[400] mb-3">
        {item?.desc}
      </p>
      <div class="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[#989BA1] font-[300] mb-2">Participants</p>
          <div class="flex">
            {item?.participants?.slice(0, 5).map((item, index) => (
              <Participants key={index} participant={item} />
            ))}
            {item?.participants.length > 10 && (
              <Image
                src="/images/participants/pic-5.png"
                width={40}
                height={40}
                alt={"Icon 10+"}
                className="-ml-4 rounded-full"
              />
            )}
          </div>
        </div>
        <div className="self-end">
          <Button bg={"#5843BE"} textColor={"#FFF"}>
            <p className="text-white">Join Event</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OngoingCompetitionsCard;
