import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="w-[77%] flex flex-col h-full">
      <Navbar />
      <Content />
    </div>
  );
}

export default Main;
