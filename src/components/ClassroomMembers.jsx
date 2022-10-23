import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";

const ClassroomMembers = () => {
  const { id } = useParams();
  const { fetchData } = useAuth();
  const URL = `classrooms/${id}/students-list/`;
  const [allMembers, setAllMembers] = useState();

  useEffect(() => {
    fetchData
      .get(URL)
      .then(({ data }) => {
        setAllMembers(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <div className="relative bg-white rounded-[8px] border border-gray-200 h-full">
      <div className="text-[15px] leading-[25px] text-black font-bold font-nunito text-15px py-[0.875rem] px-[1rem]">
        Classroom Members
      </div>
      <ul className="overflow-y-scroll overflow-x-hidden">
        {allMembers && allMembers.results &&
          allMembers.results.map((item) => {
            return (
              <li
                key={item.id}
                className="list__item text-[16px] leading-[26px] text-gray-300 py-2.5 px-[1.875rem] cursor-pointer hover:bg-blue-200 font-semibold flex items-center gap-3"
              >
                <span className="ant-avatar ant-avatar-circle ant-avatar-icon w-[28px] h-[28px] leading-[28px]">
                  <img src={item.avatar} alt="member profile img" />
                </span>

                <p className="text-[#7D8DA6] text-[14px] font-nunito font-semibold m-0">
                  {item.first_name} {item.last_name}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ClassroomMembers;
