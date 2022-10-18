import React from "react";
import {BsPlusLg} from "react-icons/bs"
const Cards = () => {
  return (
    <div>
      <div className="w-full flex justify-end mb-5">
        <div>
          <button
            type="button"
            className="flex items-center gap-[8px] text-[#3f8cfe] py-[10px] px-[15px] bg-[#ecf4ff] rounded-[8px] text-[15px] leading-6 font-bold font-nunito hover:bg-[#3f8cfe] hover:text-white transition duration-300 ease-in"
          >
           <BsPlusLg/>
            <span>Add new card</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
