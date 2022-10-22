import React, { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useSelector } from "react-redux";
import JoinClassroomConfirmModal from "./JoinClassroomConfirmModal";

const ClassroomCountdown = () => {
  const [openConfirm, setOpenConfirm] = useState();
  const { classroom } = useSelector((state) => state.classRoom);

  const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="text-red-400 text-center text-[1.5rem] leading-[2.046rem] font-nunito font-extrabold">
            Class Expired
          </h3>
          {classroom.lock && (
            <button
              onClick={() => setOpenConfirm(classroom.classroom_id)}
              className="py-[15px] px-6 bg-blue-400 rounded-[0.625rem] text-base text-white font-bold font-nunito hover:bg-blue-500 transition duration-300"
            >
              Join Classroom
            </button>
          )}
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div className="flex items-center justify-center gap-8 text-blue-400 ">
          <div className="text-4xl font-nunito font-bold flex flex-col gap-1.5 items-center">
            <span>{days}</span>
            <span className="text-[1.5rem] leading-[2.046rem]">Day</span>
          </div>
          <div className="text-4xl font-nunito font-bold flex flex-col gap-1.5 items-center">
            <span>{zeroPad(hours)}</span>
            <span className="text-[1.5rem] leading-[2.046rem]">Hours</span>
          </div>
          <div className="text-4xl font-nunito font-bold flex flex-col gap-1.5 items-center">
            <span>{zeroPad(minutes)}</span>
            <span className="text-[1.5rem] leading-[2.046rem]">Min</span>
          </div>
          <div className="text-4xl font-nunito font-bold flex flex-col gap-1.5 items-center">
            <span>{zeroPad(seconds)}</span>
            <span className="text-[1.5rem] leading-[2.046rem]">Sec</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown date={classroom.class_date} renderer={countDownRenderer} />
      <JoinClassroomConfirmModal
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
      />
    </div>
  );
};

export default ClassroomCountdown;
