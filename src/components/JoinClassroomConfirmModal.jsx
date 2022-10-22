import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../auth/useAuth";
import { loadClassroomData } from "../app/features/classRoom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const JoinClassroomConfirmModal = ({ openConfirm, setOpenConfirm }) => {
  const { fetchData } = useAuth();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const URL = `classrooms/${id}/public-details/`;
  const handleJoinButton = () => {
    setLoading(true)
    fetchData
      .post("classrooms/join-student/", {
        classroom_id: openConfirm,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(loadClassroomData({ fetchData, URL }));
        toast.success("You join the classroom successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false)
        setOpenConfirm(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        setOpenConfirm(false)
      });
  };
  return (
    <Modal
      open={openConfirm}
      onCancel={() => setOpenConfirm(false)}
      footer={null}
    >
      <div className="pt-[10px] pb-[10px] px-[10px] sm:px-[10px]">
        <div className="mb-[1.875rem] font-nunito">
          <h3 className="text-[24px] leading-[30px] font-extrabold">
            Do you want to join this classroom?
          </h3>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <button
            onClick={() => setOpenConfirm(false)}
            className=" w-1/2 text-center py-[1.125rem] bg-white border-[1px] border-gray-300 rounded-[10px] font-bold font-nunito text-[17px] text-gray-700"
          >
            No
          </button>

          {loading ? (
            <Button
              disabled
              className="login-form-button !w-1/2 !py-[1.125rem] !rounded-[10px] !h-auto !font-bold !text-[17px]"
              block
              size="large"
              loading
            >
              Processing...
            </Button>
          ) : (
            <button
              onClick={handleJoinButton}
              className="w-1/2 text-center py-[1.125rem] bg-blue-500 border-0 rounded-[10px] font-bold font-nunito text-[17px] text-white hover:bg-blue-600"
            >
              Yes
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default JoinClassroomConfirmModal;
