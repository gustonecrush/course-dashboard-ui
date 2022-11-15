import Image from "next/image";
import React from "react";

function ItemMenu({ menu, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 pr-3 pl-7 mb-1 w-[245px] rounded-[20px] ${
        active === menu?.name ? "bg-[#5843BE]" : "bg-white"
      } outline-none border-none flex items-center cursor-pointer hover:scale-[0.95] hover:text-white transition-all`}
    >
      <Image
        src={"/icons/" + menu?.icon}
        alt={menu?.name}
        width={30}
        height={30}
        className="mr-3"
      />

      <div className="flex">
        <p
          className={`mr-2 ${
            active === menu?.name ? "text-white" : "text-[#7A7E86]"
          }`}
        >
          {menu?.name}
        </p>

        {menu?.pro && <Image src={"/icons/badge.svg"} width={50} height={10} />}
      </div>
    </button>
  );
}

export default ItemMenu;
