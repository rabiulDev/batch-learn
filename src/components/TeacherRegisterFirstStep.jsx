import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFirstStepData } from "../app/features/teacherRegisterData";
import TeacherRegisProcessBtn from "./TeacherRegisProcessBtn";
import { toast } from "react-toastify";
const { Option } = Select;

const TeacherRegisterFirstStep = ({ setCurrent }) => {

  const dispatch = useDispatch();
  const { teacherType } = useSelector((state) => state.teacherTypes);
  const { firstStepData } = useSelector((state) => state.teacherRegistrationData);
  const [loading , setLoading] = useState(false)
  
  const onFinish = (data) => {
    const regData = {
      email: data.email,
      first_name: data.first_name,
      is_accept: data.is_accept,
      last_name: data.last_name,
      password: data.password,
      phone_number: data.phonePrefix + data.phone_number,
      teacher_type: data.occupation,
    };
    dispatch(setFirstStepData(regData));
    setLoading(true)
    axios.post(
          "https://api.staging.batchlearn.com/api/v1/auth/register-teacher-first-step/",
          regData
        )
        .then((res) => {
          if(res.data){
            setLoading(false)
            setCurrent((prev) => prev + 1);
          }
        }).catch((err)=>{
          setLoading(false)
          toast.error("Phone number or password is not valid", {
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
    }

  const prefixPhoneSelector = (
    <Form.Item name="phonePrefix" noStyle>
      <Select
        initialvalues="+86"
        style={{
          width: 70,
        }}
      >
        <Option value="+880">+880</Option>
        <Option value="+860">+860</Option>
        <Option value="+870">+870</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
        name="login"
        autoComplete="off"
        className="login-form"
        initialValues={{
          email: firstStepData?.email,
          first_name: firstStepData?.first_name,
          is_accept: firstStepData?.is_accept,
          last_name: firstStepData?.last_name,
          password: firstStepData?.password,
          phonePrefix: firstStepData?.phone_number?.slice(0, 4),
          phone_number: firstStepData?.phone_number?.slice(4),
          occupation: firstStepData?.teacher_type,
          remember: true,
        }}
      >
        <div className="sm:flex sm:gap-6 w-full">
          <div className=" sm:w-1/2">
            <Form.Item
              className="login__input"
              name="first_name"
              label="First Name:"
              rules={[
                {
                  required: true,
                  message: "The First Name field is required",
                },
              ]}
            >
              <Input
                prefix={
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 16 20"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.987 13.0674C4.44168 13.0674 1.41406 13.6034 1.41406 15.7502C1.41406 17.8969 4.42247 18.4521 7.987 18.4521C11.5323 18.4521 14.5591 17.9152 14.5591 15.7694C14.5591 13.6235 11.5515 13.0674 7.987 13.0674Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M7.98664 10.0056C10.3132 10.0056 12.1989 8.11897 12.1989 5.79238C12.1989 3.46579 10.3132 1.58008 7.98664 1.58008C5.66005 1.58008 3.77346 3.46579 3.77346 5.79238C3.7656 8.11111 5.6391 9.9977 7.95695 10.0056H7.98664Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                  </svg>
                }
                size="large"
                placeholder="Ex. Jhonny"
              />
            </Form.Item>
          </div>
          <div className=" sm:w-1/2">
            <Form.Item
              className="login__input"
              name="last_name"
              label="Last Name:"
              rules={[
                {
                  required: true,
                  message: "The Last Name field is required",
                },
              ]}
            >
              <Input
                prefix={
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 16 20"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.987 13.0674C4.44168 13.0674 1.41406 13.6034 1.41406 15.7502C1.41406 17.8969 4.42247 18.4521 7.987 18.4521C11.5323 18.4521 14.5591 17.9152 14.5591 15.7694C14.5591 13.6235 11.5515 13.0674 7.987 13.0674Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M7.98664 10.0056C10.3132 10.0056 12.1989 8.11897 12.1989 5.79238C12.1989 3.46579 10.3132 1.58008 7.98664 1.58008C5.66005 1.58008 3.77346 3.46579 3.77346 5.79238C3.7656 8.11111 5.6391 9.9977 7.95695 10.0056H7.98664Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                  </svg>
                }
                size="large"
                placeholder="Ex. Doe"
              />
            </Form.Item>
          </div>
        </div>

        <div className="sm:flex sm:gap-6 w-full">
          <div className=" sm:w-1/2">
            <Form.Item
              className="login__input"
              name="email"
              label="Email:"
              rules={[
                {
                  type: "email",
                  message: "The Email field must be a valid email",
                },
                {
                  required: true,
                  message: "The Email field is required",
                },
              ]}
            >
              <Input
                prefix={
                  <svg
                    fill="none"
                    height="18"
                    viewBox="0 0 20 18"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4107 6.11353L11.3377 9.42548C10.5681 10.036 9.48544 10.036 8.71591 9.42548L4.60852 6.11353"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M14.4998 17.25C17.2877 17.2577 19.1666 14.9671 19.1666 12.1518V5.85584C19.1666 3.04059 17.2877 0.75 14.4998 0.75H5.50019C2.71228 0.75 0.833313 3.04059 0.833313 5.85584V12.1518C0.833313 14.9671 2.71228 17.2577 5.50019 17.25H14.4998Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                  </svg>
                }
                size="large"
                placeholder="john@example.com"
              />
            </Form.Item>
          </div>
          <div className="sm:w-1/2">
            <Form.Item
              className="global__input"
              name="phone_number"
              label="Phone:"
              rules={[
                {
                  required: true,
                  message: "The Phone field is required",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Phone number"
                addonBefore={prefixPhoneSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="sm:flex sm:gap-6 w-full">
          <div className=" sm:w-1/2">
            <Form.Item
              name="occupation"
              label="Occupation:"
              rules={[
                {
                  required: true,
                  message: "The Occupation field is required",
                },
              ]}
            >
              <Select
                size="large"
                style={{
                  width: "100%",
                }}
              >
                {teacherType?.map((item) => (
                  <Option key={item.key} value={item.key}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className=" sm:w-1/2">
            <Form.Item
              name="password"
              label="Password:"
              rules={[
                {
                  required: true,
                  message: "The Password field is required",
                },
                {
                  min: 8,
                  message:
                    "This password is too short. It must contain at least 8 characters.",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <svg
                    data-v-3b0cc4aa=""
                    fill="none"
                    height="20"
                    viewBox="0 0 16 20"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      data-v-3b0cc4aa=""
                      d="M12.0548 7.6605V5.69242C12.0548 3.38884 10.1866 1.52067 7.88301 1.52067C5.57943 1.51059 3.70393 3.36959 3.69385 5.67409V5.69242V7.6605"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>{" "}
                    <path
                      data-v-3b0cc4aa=""
                      clipRule="evenodd"
                      d="M11.3762 18.4788H4.372C2.4525 18.4788 0.895996 16.9232 0.895996 15.0028V11.0712C0.895996 9.1508 2.4525 7.59521 4.372 7.59521H11.3762C13.2957 7.59521 14.8522 9.1508 14.8522 11.0712V15.0028C14.8522 16.9232 13.2957 18.4788 11.3762 18.4788Z"
                      fillRule="evenodd"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>{" "}
                    <path
                      data-v-3b0cc4aa=""
                      d="M7.87429 12.0192V14.0551"
                      stroke="#95A3BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    ></path>
                  </svg>
                }
                size="large"
                placeholder="......"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex items-center justify-center mb-[28px]">
          <Form.Item
            name="is_accept"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("The Terms field is required")),
              },
            ]}
          >
            <Checkbox>
              <p className="text-base font-nunito text-gray-500 font-medium m-0">
                I accept the{" "}
                <Link to="/" className="underline text-blue-500">
                  terms and conditions
                </Link>
              </p>
            </Checkbox>
          </Form.Item>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="max-w-[124px] w-full">
            <Button
              disabled
              className="!flex !bg-transparent !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !text-[#042040] !border !border-[#3f8cfe] !rounded-[0.625rem]"
              htmlType="submit"
              size="large"
              block
            >
              Prev
            </Button>
          </div>
          <div className="max-w-[124px] w-full">
            { loading ? <TeacherRegisProcessBtn/> : <Button
              className="!flex !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !rounded-[0.625rem]"
              type="primary"
              htmlType="submit"
              size="large"
              block
            >
              Next
            </Button> 
           }
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
    </div>
  );
}

export default TeacherRegisterFirstStep;
