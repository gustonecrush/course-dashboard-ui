import Image from "next/image";
import React from "react";

function SearchBar({ placeholder }) {
  return (
    <form
      action=""
      className="flex bg-[#F6F7F8] py-2 box-border rounded-lg px-8 ml-10 w-8/12 items-center"
    >
      <label for="search">
        <Image
          src="/icons/icon_search.svg"
          width={20}
          height={20}
          alt="Search Icon"
        />
      </label>
      <input
        id="search"
        className="text-[#787C84] border-none outline-none ml-3 text-[400] py-2 w-full bg-[#F6F7F8]"
        placeholder={placeholder}
        type="text"
        name="keyword"
      />
    </form>
  );
}

export default SearchBar;
