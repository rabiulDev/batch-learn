import { Modal } from "antd";
import React from "react";

const SessionConfirmModal = ({ openConfirm, setOpenConfirm }) => {
  return (
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
          <button onClick={() => setOpenConfirm(false)} className=" w-1/2 text-center py-[1.125rem] bg-white border-[1px] border-gray-300 rounded-[10px] font-bold font-nunito text-[17px] text-gray-700">
            No
          </button>
          <button className="w-1/2 text-center py-[1.125rem] bg-blue-500 border-0 rounded-[10px] font-bold font-nunito text-[17px] text-white hover:bg-blue-600">
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SessionConfirmModal;
