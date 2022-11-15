import Image from "next/image";
import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex px-15 py-5 mt-8">
      <SearchBar placeholder={"Search course, student, review, etc"} />
      <Button bg="#F6F7F8" textColor={"#787C84"} margin={4}>
        <Image
          src="/icons/icon_filter.svg"
          width={20}
          height={20}
          alt="Filter Icon"
          className="mr-1"
        />
        <p className="text-[#797C84]">Filter</p>
      </Button>
    </div>
  );
}

export default Navbar;
