import React from "react";

const ClassroomComment = () => {
  return (
    <div className="relative col-span-7 bg-white rounded-[8px] border border-gray-200 p-5">
      <div className="text-[15px] leading-[25px] text-black font-bold font-nunito">
        Classroom comments
      </div>

      <div className="h-[480px] overflow-y-scroll my-2.5">
        <p className="text-center text-[#7D8DA6] text-base font-nunito font-semibold h-full flex items-center justify-center">
          No comments found!
        </p>
      </div>

      {/* COMMENT INPUT FIELD  */}

      <div className="comment__input flex items-center gap-2 mt-2.5">
        <input
          placeholder="Your comment here..."
          type="text"
          className="ant-input"
        />
        <button>
          <svg
            id="Capa_1"
            enableBackground="new 0 0 404.644 404.644"
            height="28"
            viewBox="0 0 404.644 404.644"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m5.535 386.177c-3.325 15.279 8.406 21.747 19.291 16.867l367.885-188.638h.037c4.388-2.475 6.936-6.935 6.936-12.08 0-5.148-2.548-9.611-6.936-12.085h-.037l-367.885-188.641c-10.885-4.881-22.616 1.589-19.291 16.869.225 1.035 21.974 97.914 33.799 150.603l192.042 33.253-192.042 33.249c-11.825 52.686-33.575 149.567-33.799 150.603z"
                fill="#3F8CFE"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClassroomComment;
