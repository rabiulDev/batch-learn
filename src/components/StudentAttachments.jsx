import React, { useState } from "react";
import AttachmentButton from "./AttachmentButton";
import StudentAttachFileModal from "./StudentAttachFileModal";

const StudentAttachments = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="mb-2.5 relative max-h-[430px] h-full">
        <div className="relative bg-white rounded-[8px] border border-gray-200">
          <div className="flex items-center justify-between px-[1rem] py-3">
            <div className="text-[15px] leading-[25px] text-black py-[0.875rem] font-bold font-nunito">
              {" "}
              Student Attachments{" "}
            </div>
            <AttachmentButton action={setOpenModal} />   
          </div>
          <ul className="overflow-y-scroll h-80 overflow-x-hidden">
            <p className="text-center text-[#7D8DA6] text-base font-nunito font-semibold h-full flex items-center justify-center">
              {" "}
              No Attachment found!
            </p>
          </ul>
        </div>
      </div>

      <StudentAttachFileModal open={openModal} close={setOpenModal}/>
    </>
  );
};

export default StudentAttachments;

