import React from "react";

const AttachmentButton = () => {
  return (
    <div>
      <button className=" attachbtn-hover flex items-center gap-[5px] py-[10px] px-[15px] text-[15px] text-[#3f8cfe] leading-[25px] font-bold font-nunito hover:text-gray-400">
        <svg
       
          fill="none"
          height="21"
          viewBox="0 0 20 21"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
         
            id="mask0_648_9543"
            height="21"
            maskUnits="userSpaceOnUse"
            width="20"
            x="0"
            y="0"
            style={{maskType: "alpha"}}
          >
            <rect
          
              fill="#D9D9D9"
              height="20"
              width="20"
              y="0.5"
            ></rect>
          </mask>{" "}
          <g  mask="url(#mask0_648_9543)">
            <path
             
              d="M15.1427 10.4528H4.76172"
              stroke="#3F8CFE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            ></path>
            <path
             
              d="M9.9543 15.6429V5.26196"
              stroke="#3F8CFE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            ></path>
          </g>
        </svg>
        <span>Attachment</span>
      </button>
    </div>
  );
};

export default AttachmentButton;
