import React from "react";

const NoAccess = ({text}) => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-white px-5 rounded-[8px] border border-gray-200 min-h-[96px]">
      <div>
        <span>
          <svg
           
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            className="mx-auto fill-blue-100 mb-4"
          >
            <path
              data-v-61ba0d1f=""
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z"
            ></path>
          </svg>
        </span>
        <p className="text-center text-[#7D8DA6] text-base font-nunito font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default NoAccess;
