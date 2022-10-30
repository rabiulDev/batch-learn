import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import AttachmentButton from './AttachmentButton';
import TeacherAttachfileModal from "./TeacherAttachfileModal"
import {loadTeacherAttachmentList} from "../app/features/teacherAttachmentList"
import { useState } from 'react';

const TeacherAttachments = () => {
  const [openModal, setOpenModal] = useState(false)
  const {fetchData} = useAuth()
  const dispatch = useDispatch()
  const { role } = useSelector((state) => state.accout);
  const { teacherAttachment, attachmentList } = useSelector((state) => state.teacherAttachList);
  const { id } = useParams();
  const URL = `classrooms/${id}/teacher-attachment-list/?page=1&page_size=10`

   useEffect(()=>{
    dispatch(loadTeacherAttachmentList({fetchData, URL}))
   },[])
  return (
   <>
    <div className="mb-2.5 relative max-h-[430px] h-full">
      <div className='relative bg-white rounded-[8px] border border-gray-200'>
        <div className='flex items-center justify-between px-[1rem] py-3'>
            <div className="text-[15px] leading-[25px] text-black py-[0.875rem] font-bold font-nunito"> Teacher Attachments </div>
        {role === "Teacher" && <AttachmentButton action={setOpenModal} />}
        </div>
        <ul className='overflow-y-scroll h-80 overflow-x-hidden'>
          
          {teacherAttachment?.count === 0 && <p className='text-center text-[#7D8DA6] text-base font-nunito font-semibold h-full flex items-center justify-center'> No Attachment found!</p>}
          {teacherAttachment?.count !== 0 && attachmentList?.map((item)=>{
          return  <li key={item.id} className='list__item text-[16px] leading-[26px] text-gray-400 py-2.5 px-[1.875rem] cursor-pointer hover:bg-blue-50 font-semibold font-nunito'>
            <a className='text-gray-400 text-ellipsis' href={item.file} target="_blank"> {item?.file?.split("?")[0].split("_path/")[1]}</a>
          </li>
            
          })}
        </ul>
      </div>
      
    </div>
    <TeacherAttachfileModal open={openModal} close={setOpenModal}/>
    </>
  )
}

export default TeacherAttachments