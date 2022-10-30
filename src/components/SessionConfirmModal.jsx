import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import useAuth from "../auth/useAuth";
import { openAddNewCardModal } from "../app/features/addNewCardModal";
import AddNewCardModal from "./AddNewCardModal";
import { toast } from "react-toastify";
import { useState } from "react";

const SessionConfirmModal = ({ openConfirm, setOpenConfirm, loadEventData }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { fetchData } = useAuth();
  const { createClassroomData } = useSelector(
    (state) => state.createClassroomData
  );
  const { profileInfo } = useSelector((state) => state.profileInfo);

  const handleCreateClass = () => {
    const newClassData = {
      class_date: createClassroomData.classDate,
      creator: profileInfo.id,
      description: createClassroomData.description,
      students: [profileInfo.id],
      subject: createClassroomData.subject,
      title: createClassroomData.title,
    };
    setLoading(true)
    fetchData
      .post("classrooms/class_room_create/", newClassData)
      .then((res) => {
        setLoading(false)
        setOpenConfirm(false);
        loadEventData()
        toast.success("Classroom created successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      })
      .catch((err) => {
        setLoading(false)
        dispatch(openAddNewCardModal());
        toast.error(err?.response?.data?.non_field_errors[0], {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <Modal
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        footer={null}
      >
        <div className="pt-[10px] pb-[10px] px-[10px] sm:px-[10px]">
          <div className="mb-[1.875rem] font-nunito">
            <h3 className="text-[24px] leading-[30px] font-extrabold">
              Do you want to create classroom?
            </h3>
            <h3 className="text-[24px] leading-[30px] font-extrabold">
              Creating a classroom will cost $5
            </h3>
          </div>

          <div className="w-full flex items-center justify-between gap-4">
            <button
              onClick={() => setOpenConfirm(false)}
              className=" w-1/2 text-center py-[1.125rem] bg-white border-[1px] border-gray-300 rounded-[10px] font-bold font-nunito text-[17px] text-gray-700"
            >
              No
            </button>
            { loading ? <Button 
             disabled
             loading
             className="!w-1/2 !h-auto !py-[1.125rem] !border-0 !rounded-[10px] !font-bold !font-nunito !text-[17px]"
            >Processing</Button> : <button
              onClick={handleCreateClass}
              className="w-1/2 text-center py-[1.125rem] bg-blue-500 border-0 rounded-[10px] font-bold font-nunito text-[17px] text-white hover:bg-blue-600"
            >
              Yes
            </button>}
          </div>
        </div>
      </Modal>
      <AddNewCardModal />
    </>
  );
};

export default SessionConfirmModal;
