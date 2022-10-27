//https://api.staging.batchlearn.com/api/v1/classrooms/56/end-classroom/

import React, { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useAuth from "../auth/useAuth";
import JoinClassroomConfirmModal from "./JoinClassroomConfirmModal";
import { loadClassroomData } from "../app/features/classRoom";
import { useParams } from "react-router-dom";
import { Button } from "antd";

const ClassroomCountdown = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { fetchData } = useAuth();
  const { id } = useParams();
  const [openConfirm, setOpenConfirm] = useState();
  const { classroom } = useSelector((state) => state.classRoom);
  const { role } = useSelector((state) => state.accout);
  const URL = `classrooms/${id}/public-details/`;
  const handleJoinTeacher = (id) => {
    setLoading(true);
    fetchData
      .post("classrooms/join-teacher/", { classroom_id: id })
      .then((res) => {
        console.log(res.data);
        dispatch(loadClassroomData({ fetchData, URL }));
        setLoading(false);
        toast.success(res?.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="text-red-400 text-center text-[1.5rem] leading-[2.046rem] font-nunito font-extrabold">
            Class Expired
          </h3>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <>
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
          {role === "Student" ? (
            <div className="flex items-center justify-center mt-6">
              {classroom.lock && (
                <button
                  onClick={() => setOpenConfirm(classroom.classroom_id)}
                  className="py-[15px] px-6 bg-blue-400 rounded-[0.625rem] text-base text-white font-bold font-nunito hover:bg-blue-500 transition duration-300"
                >
                  Join Classroom
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center mt-6">
              {loading ? (
                <Button
                  disabled
                  loading
                  className="!py-[15px] !h-auto !px-6 !rounded-[0.625rem] !text-base !font-bold !font-nunito "
                >
                  Processing
                </Button>
              ) : (
                classroom.teacher === null && (
                  <button
                    onClick={() => handleJoinTeacher(classroom.classroom_id)}
                    className="py-[15px] px-14 bg-blue-500 rounded-[0.625rem] text-base text-white font-bold font-nunito hover:bg-blue-500 transition duration-300"
                  >
                    Accept
                  </button>
                )
              )}
            </div>
          )}
        </>
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
