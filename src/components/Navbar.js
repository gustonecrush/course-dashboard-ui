import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="px-15 py-5 mt-8">
      <SearchBar placeholder={"Search course, student, review, etc"} />
      <Button />
    </div>
  );
}

export default Navbar;
