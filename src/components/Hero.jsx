import React from "react";
import "../App.css";
function Hero() {
  return (
    <div className="bgImage ">
      <div className="content lg:px-56 py-52 text-white items-center lg:items-start flex flex-col ">
        <div className=" font-semibold">Summer 2020</div>
        <div className="text-5xl font-bold py-10">NEW COLLECTION</div>
        <p className="py-2">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 p-5 font-bold w-fit">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
