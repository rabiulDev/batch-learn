import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AttachmentButton from "./AttachmentButton";
import StudentAttachFileModal from "./StudentAttachFileModal";
import {loadStudentAttachmentList} from "../app/features/studentAttachmentList"
import useAuth from "../auth/useAuth";

const StudentAttachments = () => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const { role } = useSelector((state) => state.accout);
  const { studentAttachment, studentAttachmentList } = useSelector((state) => state.studentAttachList);
  const {id} = useParams()
  const {fetchData}= useAuth()
  const URL = `classrooms/${id}/student-attachment-list/?page=1&page_size=10`
  
  useEffect(()=>{
    dispatch(loadStudentAttachmentList({fetchData,URL}))
  },[])
  return (
    <>
      <div className="mb-2.5 relative max-h-[430px] h-full">
        <div className="relative bg-white rounded-[8px] border border-gray-200">
          <div className="flex items-center justify-between px-[1rem] py-3">
            <div className="text-[15px] leading-[25px] text-black py-[0.875rem] font-bold font-nunito">
              Student Attachments{" "}
            </div>
           {role === "Student" &&  <AttachmentButton action={setOpenModal} /> }  
          </div>
          <ul className="overflow-y-scroll h-80 overflow-x-hidden">
            { studentAttachmentList?.length === 0 && <p className="text-center text-[#7D8DA6] text-base font-nunito font-semibold h-full flex items-center justify-center">
            
              No Attachment found!
            </p>}

            { studentAttachmentList?.map((item)=>{
                   return <li key={item.id} className="list__item text-[16px] leading-[26px] text-gray-500 py-2.5 px-[1.875rem] cursor-pointer hover:bg-blue-50 font-semibold font-nunito">
                    <span className="text-[14px]">{item.student_info?.first_name} {item.student_info?.last_name}</span>
                    <br />
                    <a className='text-gray-500 text-ellipsis' href={item.file} target="_blank">{item?.file?.split("?")[0].split("_path/")[1]}</a>
                   </li>
            })
            
            }
          </ul>
        </div>
      </div>

      <StudentAttachFileModal open={openModal} close={setOpenModal}/>
    </>
  );
};

export default StudentAttachments;

