import React from "react";
import { AutoComplete, Button, Checkbox, Form, Input, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import { Link } from "react-router-dom";
const StudentRegister = () => {
  const prefixPhoneSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue={"+86"}
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-auth-bg bg-no-repeat bg-top bg-cover object-cover py-[50px]">
      <div className="w-full max-w-[800px] px-[30px] lg:px-[68px] py-[50px] lg:pb-[68px] lg:pt-[58px] bg-white shadow-md rounded-[15px] m-5 lg:m-0">
        <h1 className="text-center text-[2.125rem] leading-[2.899rem] font-nunito font-extrabold mb-[2.375rem]">
          Create a student account
        </h1>
        <div>
          <Form
            layout="vertical"
            requiredMark="optional"
            name="login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            <div className="sm:flex sm:gap-6 w-full">
              <div className=" sm:w-1/2">
                <Form.Item
                  name="firstName"
                  label="First Name:"
                  rules={[
                    {
                      required: true,
                      message: "The First Name field is required",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Ex. Jhonny" />
                </Form.Item>
              </div>
              <div className=" sm:w-1/2">
                <Form.Item
                  name="lastName"
                  label="Last Name:"
                  rules={[
                    {
                      required: true,
                      message: "The Last Name field is required",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Ex. Doe" />
                </Form.Item>
              </div>
            </div>

            <div className="sm:flex sm:gap-6 w-full">
              <div className=" sm:w-1/2">
                <Form.Item
                  name="email"
                  label="Email:"
                  rules={[
                    {
                      required: true,
                      message: "The Email field is required",
                    },
                  ]}
                >
                  <Input size="large" placeholder="john@example.com" />
                </Form.Item>
              </div>
              <div className="sm:w-1/2">
                <Form.Item
                  name="phone"
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
                  name="school"
                  label="School:"
                  rules={[
                    {
                      required: true,
                      message: "The School field is required",
                    },
                  ]}
                >
                  <Input.Group compact size="large">
                    <Select
                      defaultValue={null}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Option value="abc">ABC - High School</Option>
                      <Option value="usa">USA - High School</Option>
                    </Select>
                  </Input.Group>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                        ></path>{" "}
                        <path
                          data-v-3b0cc4aa=""
                          clip-rule="evenodd"
                          d="M11.3762 18.4788H4.372C2.4525 18.4788 0.895996 16.9232 0.895996 15.0028V11.0712C0.895996 9.1508 2.4525 7.59521 4.372 7.59521H11.3762C13.2957 7.59521 14.8522 9.1508 14.8522 11.0712V15.0028C14.8522 16.9232 13.2957 18.4788 11.3762 18.4788Z"
                          fill-rule="evenodd"
                          stroke="#95A3BD"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                        ></path>{" "}
                        <path
                          data-v-3b0cc4aa=""
                          d="M7.87429 12.0192V14.0551"
                          stroke="#95A3BD"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
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

            <div className="flex items-center justify-center">
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("The Terms field is required")
                          ),
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

            <div className="flex justify-center">
              <Button type="primary" htmlType="submit" size="large">
                Create account
              </Button>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                    stroke="#3F8CFE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
