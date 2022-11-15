import Image from "next/image";
import React from "react";

function UpgradeBanner() {
  return (
    <div className="bg-[#FEECD7] px-5 py-5 mt-5 rounded-[20px] flex items-center">
      <Image src="/icons/icon.svg" width={40} height={40} />
      <div className="flex flex-col ml-4">
        <p className="text-medium text-[1.1rem]">Upgrade to Pro</p>
        <a href="" className="text-[#FF865D] text-[0.8rem] underline">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default UpgradeBanner;
