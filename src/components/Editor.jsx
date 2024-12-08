import React from "react";
import man from "../assets/man.png";
import women from "../assets/women.png";
import assceories from "../assets/assceories.png";
import kids from "../assets/kids.png";
const EditorsPick = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-8">
      <h1 className="text-2xl font-bold text-gray-800">EDITOR'S PICK</h1>
      <p className="text-sm text-gray-500 mt-2">
        Problems trying to resolve the conflict between
      </p>

      <div className="flex mt-6 max-w-4xl gap-x-10">
        {/* MEN */}
        <div className="relative h-fit">
          <img
            src={man}
            alt="Men"
            className=" object-cover rounded-lg h-96 w-56"
          />
          <div className="absolute top-80 left-4 bg-white px-4 py-1 text-gray-900 font-medium shadow-lg">
            MEN
          </div>
        </div>

        {/* WOMEN */}
        <div className="relative ">
          <img src={women} alt="Women" className=" rounded-lg h-96" />
          <div className="absolute top-80 left-4 bg-white px-4 py-1 text-gray-900 font-medium shadow-lg">
            WOMEN
          </div>
        </div>
        <div className="flex-col flex gap-y-8">
          {/* ACCESSORIES */}
          <div className="relative ">
            <img
              src={assceories}
              alt="Accessories"
              className="h-44 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-gray-900 font-medium shadow-lg">
              ACCESSORIES
            </div>
          </div>

          {/* KIDS */}
          <div className="relative">
            <img
              src={kids}
              alt="Kids"
              className="h-44 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-1 text-gray-900 font-medium shadow-lg">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
