import React, { useState } from "react";
import { Button, Divider, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import RegisterModal from "../components/RegisterModal";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { saveToken } = useAuth();

  const onFinish = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    try {
      form.resetFields();
      setLoading(true);
      const response = await axios.post(
        "http://api.staging.batchlearn.com/api/v1/auth/login/",
        loginData
      );
      if (response.data) {
        setLoading(false);
        setErrMessage(null);
        saveToken(response.data.access);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setErrMessage(err.message);
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-auth-bg bg-no-repeat bg-top bg-cover object-cover py-[50px]">
      <div className="w-full max-w-[506px] bg-white shadow-md rounded-[15px] m-5 sm:m-0 py-[50px] sm:py-0 px-[30px] sm:px-16 sm:pt-[58px] sm:pb-16">
        <h1 className="text-center mb-[2.375rem] text-[2.125rem] leading-[2.899rem] font-extrabold font-nunito">
          Sign In
        </h1>
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
            name="login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            <div className="mb-[28px]">
              <Form.Item
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
                    className="mr-2"
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
                  placeholder="Enter your email"
                />
              </Form.Item>
            </div>
            <div className="mb-[28px]">
              <Form.Item
                name="password"
                label="Password:"
                rules={[
                  {
                    required: true,
                    message: "The Password field is required",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <svg
                    className="mr-3"
                      fill="none"
                      height="20"
                      viewBox="0 0 16 20"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0548 7.6605V5.69242C12.0548 3.38884 10.1866 1.52067 7.88301 1.52067C5.57943 1.51059 3.70393 3.36959 3.69385 5.67409V5.69242V7.6605"
                        stroke="#95A3BD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        clipRule="evenodd"
                        d="M11.3762 18.4788H4.372C2.4525 18.4788 0.895996 16.9232 0.895996 15.0028V11.0712C0.895996 9.1508 2.4525 7.59521 4.372 7.59521H11.3762C13.2957 7.59521 14.8522 9.1508 14.8522 11.0712V15.0028C14.8522 16.9232 13.2957 18.4788 11.3762 18.4788Z"
                        fillRule="evenodd"
                        stroke="#95A3BD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M7.87429 12.0192V14.0551"
                        stroke="#95A3BD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      ></path>
                    </svg>
                  }
                  size="large"
                  placeholder="••••••"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>
            {errMessage && (
              <p className="text-base text-red-500 font-nunito font-semibold">
                Email or password is incorrect
              </p>
            )}
            {loading ? (
              <Form.Item>
                <Button
                  disabled
                  className="login-form-button login_btn_loading"
                  block
                  size="large"
                  loading
                >
                  Processing
                </Button>
              </Form.Item>
            ) : (
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button login_btn"
                  block
                  size="large"
                >
                  Login
                </Button>
              </Form.Item>
            )}

            <Link
              to="/auth/forgot-password"
              className="cursor-pointer text-center text-blue-500 my-5 text-base font-semibold font-nunito"
            >
              <p className="text-center">Forgot password?</p>
            </Link>
            <Divider />

            {/* Registration Modal  */}

            <RegisterModal open={open} setOpen={setOpen} />

            <div
              onClick={() => setOpen(true)}
              className="cursor-pointer text-center text-base font-semibold font-nunito"
            >
              <span>Don't have an account?</span>{" "}
              <span className="text-blue-500">Sign Up Free!</span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
