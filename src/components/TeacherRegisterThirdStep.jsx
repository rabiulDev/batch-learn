import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import TeacherRegisProcessBtn from "./TeacherRegisProcessBtn";
import { useDispatch, useSelector } from "react-redux";
import { setSecondStepData, setFirstStepData } from "../app/features/teacherRegisterData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const { TextArea } = Input;



const TeacherRegisterThirdStep = ({setCurrent}) => {
  const dispatch = useDispatch()
  const {classTools} = useSelector((state) => state.classTools)
  const { firstStepData } = useSelector((state) => state.teacherRegistrationData);
  const { secondStepData } = useSelector((state) => state.teacherRegistrationData)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();



  const handleSubmit = (data) => {
    const submitData ={...firstStepData, ...secondStepData, ...data}
    setLoading(true)
    try {
      axios
        .post(
          "http://api.staging.batchlearn.com/api/v1/auth/register-teacher/",
          submitData
        )
        .then((res) => {
          if(res.data){
            setLoading(false);
            dispatch(setFirstStepData({}))
            dispatch(setSecondStepData({}))
            toast.success("Your account has been successfully created. Please login.", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            navigate("/")
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }
  return (
    <Form
    onFinish={handleSubmit}
      name="thirdStep"
      labelWrap={true}
      layout="vertical"
      requiredMark="optional"
      initialValues={{
        remember: true,
      }}
    >

<div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <Form.Item
            name="classes_tools"
            label="Select any tools you use for virtual classes:"
            // valuePropName="value"
            rules={[
              {required: true, message: "The School field is required"}]}
          >
            <Checkbox.Group>
              <div className="flex flex-col gap-5 mt-1">
                {classTools?.map((item)=> <Checkbox key={item.id} value={item.id} className="!m-0">{item.name}</Checkbox> )}
                
              </div>
            </Checkbox.Group>
          </Form.Item>
        </div>

        <div className="col-span-6">
          <Form.Item
            name="about"
            label="Anything you want to add about yourself? (Schools your students attend, other classes, experience):"
            rules={[
              {
                required: true,
                message: "The School field is required",
              },
            ]}
          >
            <TextArea size="large" placeholder="Description" />
          </Form.Item>
        </div>
      </div>




      <div className="flex items-center justify-center gap-6">
        <div className="max-w-[124px] w-full">
          <Button
          onClick={()=>setCurrent((prev)=>prev - 1)}
            className="!flex !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !rounded-[0.625rem]"
            type="primary"
            htmlType="submit"
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
            Submit
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
  )
}

export default TeacherRegisterThirdStep