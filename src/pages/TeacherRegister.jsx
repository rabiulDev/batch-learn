import { Steps } from "antd";
import React, { useEffect, useState } from "react";
import TeacherRegisterFirstStep from "../components/TeacherRegisterFirstStep";
import TeacherRegisterSecondStep from "../components/TeacherRegisterSecondStep";
import TeacherRegisterThirdStep from "../components/TeacherRegisterThirdStep";
import {loadSchools} from "../app/features/getSchools"
import {loadTeachersTypes} from "../app/features/getTeacherTypes"
import {loadSubjects} from "../app/features/getSubjects"
import {loadClassTools} from "../app/features/getClassesTools"
import { useDispatch } from "react-redux";

const { Step } = Steps;

const TeacherRegister = () => {
    const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      id: 1,
      content: <TeacherRegisterFirstStep setCurrent={setCurrent}/>,
    },
    {
      id: 2,
      content: <TeacherRegisterSecondStep setCurrent={setCurrent} />,
    },
    {
      id: 3,
      content: <TeacherRegisterThirdStep setCurrent={setCurrent}/>,
    },
  ];


 useEffect(()=>{
   dispatch(loadSchools())
   dispatch(loadTeachersTypes())
   dispatch(loadSubjects())
   dispatch(loadClassTools())
 },[])


  return (
    <div className="min-h-screen flex items-center justify-center bg-auth-bg bg-no-repeat bg-top bg-cover object-cover py-[50px]">
      <div className="w-full max-w-[800px] px-[30px] lg:px-[68px] py-[50px] lg:pb-[68px] lg:pt-[58px] bg-white shadow-md rounded-[15px] m-5 lg:m-0">
        <h1 className="text-center text-[2.125rem] leading-[2.899rem] font-nunito font-extrabold mb-[2.375rem]">
          Create an teacher account
        </h1>

        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.id} />
          ))}
        </Steps>

       <div className="mt-[2.375rem]">{steps[current].content}</div>

      </div>
    </div>
  );
};

export default TeacherRegister;
