import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { toast } from "react-toastify";
import React, { useState } from "react";
import useAuth from "../auth/useAuth";

const ChangePasswordModal = ({ openModal, setOpenModal }) => {
  const { fetchData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleChangePassword = (data) => {
    setLoading(true);
    fetchData
      .post("/auth/change-password/", data)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        toast.success("Success!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setOpenModal(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setOpenModal(false);
      });
    form.resetFields();
  };

  return (
    <Modal
      centered
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
    >
      <div className="pt-5 pb-5 px-5 sm:px-[30px]">
        <div className="mb-[1.875rem] font-nunito">
          <h3 className="text-[24px] leading-[30px] font-extrabold">
            Change Account Password
          </h3>
        </div>
        <Form
          form={form}
          onFinish={handleChangePassword}
          layout="vertical"
          requiredMark="optional"
          name="changePassword"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <div className="mb-[28px]">
            <Form.Item
              name="old_password"
              label="Old Password:"
              rules={[
                {
                  required: true,
                  message: "The Old Password field is required",
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

          <div className="mb-[28px]">
            <Form.Item
              name="new_password"
              label="New Password:"
              rules={[
                {
                  required: true,
                  message: "The new Password field is required",
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

          <div className="mb-[28px]">
            <Form.Item
              name="new_password_confirmation"
              label="Confirm New Password:"
              dependencies={["new_password"]}
              rules={[
                {
                  required: true,
                  message: "The confirm Password field is required",
                },

                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("new_password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
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
                Change Password
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
