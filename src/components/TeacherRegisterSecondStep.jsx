import { Button, Checkbox, Form, } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSecondStepData } from "../app/features/teacherRegisterData";
import { Link } from "react-router-dom";
import TeacherRegisProcessBtn from "./TeacherRegisProcessBtn";
import axios from "axios";

const TeacherRegisterSecondStep = ({ setCurrent }) => {
  const dispatch = useDispatch();
  const { secondStepData } = useSelector((state) => state.teacherRegistrationData);
  const {subjects} = useSelector((state) => state.subjects)
  const {school} = useSelector((state) => state.schools)
  const [loading, setLoading] = useState(false)

const handleSecondStep = (data) => {
      const secondStepRegData = {
        serve_or_attend_school:data.serve_or_attend_school,
        subjects: data.subjects,
      }
      dispatch(setSecondStepData(secondStepRegData))
      setLoading(true)
    try {
      axios
        .post(
          "https://api.staging.batchlearn.com/api/v1/auth/register-teacher-second-step/",
          secondStepRegData
        )
        .then((res) => {
          if(res.data){
            setLoading(false)
            setCurrent((prev) => prev + 1);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
}
  return (
    <Form
      onFinish={handleSecondStep}
      name="secondstep"
      labelWrap={true}
      layout="vertical"
      requiredMark="optional"
      initialValues={{
        ...secondStepData
      }}
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <Form.Item
            name="subjects"
            label="Select up to 3 subjects you teach (honors / AP level courses):"
            // valuePropName="value"
            rules={[
              {required: true, message: "The School field is required"}]}
          >
            <Checkbox.Group>
              <div className="flex flex-col gap-5 mt-1">
                {subjects?.map((item)=> <Checkbox key={item.id} value={item.id} className="!m-0">{item.name}</Checkbox> )}
                
              </div>
            </Checkbox.Group>
          </Form.Item>
        </div>

        <div className="col-span-6">
          <Form.Item
            name="serve_or_attend_school"
            label="Select schools your current studens attend or schools you serve (North Atlana):"
            rules={[
              {
                required: true,
                message: "The School field is required",
              },
            ]}
          >
            <Checkbox.Group>
            <div className="flex flex-col gap-5 mt-1">
              {school?.map((item)=> <Checkbox key={item.id} value={item.id} className="!m-0">{item.name}</Checkbox>)}
            </div>
            </Checkbox.Group>
          </Form.Item>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="max-w-[124px] w-full">
          <Button
            onClick={()=>setCurrent((prev)=> prev - 1)}
            className="!flex !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !rounded-[0.625rem]"
            type="primary"
            size="large"
            block
          >
            Prev
          </Button>
        </div>
        <div className="max-w-[124px] w-full">
          {loading ? <TeacherRegisProcessBtn/> : <Button
            className="!flex !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !rounded-[0.625rem]"
            type="primary"
            htmlType="submit"
            size="large"
            block
          >
            Next
          </Button>}
        </div>
      </div>

      <div className="mt-7 text-center text-base text-blue-500 font-semibold font-nunito">
        <Link to="/">
          Back to login
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-1"
          >
            <path
              d="M13.167 7.81706L3.16699 7.81706"
              stroke="#3F8CFE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
              stroke="#3F8CFE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </Link>
      </div>
    </Form>
  );
};

export default TeacherRegisterSecondStep;
