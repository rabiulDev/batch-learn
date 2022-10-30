import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { loadProfileInfoData } from "../app/features/profileInfo";
import { toast } from "react-toastify";
import ProfileUploadModal from "../components/ProfileUploadModal";
import PhoneInput from "react-phone-input-2";
const { Option } = Select;

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchData } = useAuth();
  const { profileInfo } = useSelector((state) => state.profileInfo);
  const { subjects } = useSelector((state) => state.subjects);
  const { classTools } = useSelector((state) => state.classTools);
  const { role } = useSelector((state) => state.accout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfileInfoData(fetchData));
  }, []);

  const profileInfoUpdateHandler = (data) => {
    const updateData = {
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: `+${data.phone_number}`,
      subjects: data.subjects,
      classes_tools: data.classes_tools,
    };

    setLoading(true)
    fetchData
      .put("auth/profile_info/", updateData)
      .then((res) => {
        dispatch(loadProfileInfoData(fetchData));
        toast.success("Profile has been updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something wrong", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false)
      });
  };

  
  if (profileInfo.email) {
    return (
      <div>
        {/* BREAD CUMBER  */}
        <div className="flex items-center gap-2.5 mb-9">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1355_12901"
                maskUnits="userSpaceOnUse"
                x="3"
                y="13"
                width="16"
                height="8"
                style={{ maskType: "alpha" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.66669 13.288H18.1866V20.0475H3.66669V13.288Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_1355_12901)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9275 14.663C7.02154 14.663 5.04154 15.334 5.04154 16.6586C5.04154 17.9951 7.02154 18.6725 10.9275 18.6725C14.8325 18.6725 16.8115 18.0015 16.8115 16.6769C16.8115 15.3404 14.8325 14.663 10.9275 14.663ZM10.9275 20.0475C9.13173 20.0475 3.66656 20.0475 3.66656 16.6585C3.66656 13.6372 7.81081 13.288 10.9275 13.288C12.7232 13.288 18.1866 13.288 18.1866 16.6769C18.1866 19.6982 14.0432 20.0475 10.9275 20.0475Z"
                  fill="#1890ff"
                ></path>
              </g>{" "}
              <mask
                id="mask1_1355_12901"
                maskUnits="userSpaceOnUse"
                x="6"
                y="1"
                width="10"
                height="11"
                style={{ maskType: "alpha" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.05896 1.83337H15.794V11.5671H6.05896V1.83337Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask1_1355_12901)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9274 3.14205C8.96485 3.14205 7.36802 4.73796 7.36802 6.70055C7.3616 8.65671 8.94652 10.2517 10.9009 10.259L10.9274 10.9135V10.259C12.8891 10.259 14.485 8.66221 14.485 6.70055C14.485 4.73796 12.8891 3.14205 10.9274 3.14205ZM10.9274 11.5671H10.8981C8.21957 11.5588 6.04982 9.37442 6.05899 6.69776C6.05899 4.01651 8.24249 1.83301 10.9274 1.83301C13.6114 1.83301 15.794 4.01651 15.794 6.70051C15.794 9.38451 13.6114 11.5671 10.9274 11.5671Z"
                  fill="#1890ff"
                ></path>
              </g>
            </svg>
          </span>
          <span>
            <svg
              fill="none"
              height="1"
              viewBox="0 0 12 1"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line stroke="#8391A9" x2="12" y1="0.5" y2="0.5"></line>
            </svg>
          </span>
          <span className="font-semibold font-nunito text-[14px] text-gray-400 leading-6">
            Profile
          </span>
        </div>

        {/* PROFILE IMAGE AND NAME  */}
        <div className="flex items-center flex-wrap gap-8 mb-10">
          <div
            onClick={() => {
              setOpenModal(true);
            }}
            className="w-[9.25rem] h-[9.255rem] rounded-full overflow-hidden bg-blue-500 cursor-pointer group relative"
          >
            {profileInfo.avatar ? (
              <img src={profileInfo?.avatar} />
            ) : (
              <svg
                width="70"
                height="70"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mt-10"
              >
                <path
                  d="M10.0002 0.157227C7.87916 0.157227 6.15405 1.88281 6.15405 4.00381V5.99662C6.15405 8.11777 7.87916 9.84336 10.0002 9.84336C12.1213 9.84336 13.8463 8.11777 13.8463 5.99662V4.00381C13.8463 1.88281 12.1213 0.157227 10.0002 0.157227Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M18.4821 14.8561C17.2506 12.7573 15.282 11.2013 12.9391 10.4747C12.8848 10.4579 12.8261 10.4722 12.7856 10.5122C11.6957 11.5868 10.3415 12.4252 10.0029 12.6277C9.64149 12.3967 8.1192 11.4044 7.21421 10.5122C7.1739 10.4722 7.11469 10.4579 7.06068 10.4747C4.71749 11.2015 2.74909 12.7574 1.51797 14.8562C1.48978 14.9043 1.48978 14.9639 1.51797 15.012C3.26622 17.991 6.51629 19.8416 9.9999 19.8416C13.4837 19.8416 16.7339 17.991 18.4821 15.012C18.5105 14.9638 18.5105 14.9041 18.4821 14.8561ZM15.231 16.0034C15.231 16.0883 15.1502 16.1532 15.0655 16.1532H14.0238C13.9389 16.1532 13.8463 16.2261 13.8463 16.3111V17.3884C13.8463 17.4731 13.801 17.5378 13.7161 17.5378H12.7805C12.6957 17.5378 12.6157 17.4731 12.6157 17.3884V16.3111C12.6154 16.2262 12.5574 16.1532 12.4725 16.1532H11.386C11.3011 16.1532 11.2309 16.0881 11.2309 16.0034V15.0759C11.2309 14.991 11.3011 14.9225 11.386 14.9225H12.4725C12.5574 14.9225 12.6154 14.8532 12.6154 14.7682V13.6897C12.6154 13.6048 12.6953 13.5379 12.7802 13.5379H13.7057C13.7904 13.5379 13.8462 13.6048 13.8462 13.6897V14.7714C13.8462 14.8564 13.9284 14.9224 14.0134 14.9224H15.0655C15.1502 14.9224 15.231 14.9942 15.231 15.0791V16.0034Z"
                  fill="#ffffff"
                ></path>
              </svg>
            )}
            <div className="absolute w-full h-full left-0 top-0 bg-black rounded-full opacity-0 group-hover:opacity-75 flex items-center justify-center transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-camera fill-white"
              >
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-nunito text-2xl m-0">{`${profileInfo?.first_name} ${profileInfo?.last_name}`}</h3>
            <p className="font-semibold font-nunito text-base text-gray-400 m-0">
              {profileInfo?.email}
            </p>
          </div>
        </div>

        <Form
          onFinish={profileInfoUpdateHandler}
          layout="vertical"
          requiredMark="optional"
          name="profile"
          className="login-form"
          initialValues={{
            email: profileInfo?.email,
            first_name: profileInfo?.first_name,
            last_name: profileInfo?.last_name,
            phone_number: profileInfo?.phone_number,
            subjects: profileInfo?.subjects && profileInfo?.subjects.map((item) => item.id),
            classes_tools: profileInfo?.classes_tools && profileInfo?.classes_tools.map((item) => item.id),
            remember: true,
          }}
        >
          {/* FORM TITLE  */}
          <div className="w-full flex items-center justify-between mb-[1.5rem]">
            <h2 className="font-extrabold font-nunito text-2xl ">
              Personal informations
            </h2>
            <div className="max-w-[124px] w-full">
              { loading ? <Button
                className="!flex !items-center !justify-center !py-[15px] !h-[46px] !font-nunito !font-bold !text-base !rounded-[10px]"
                disabled
                loading
                size="large"
                block
              >
                Processing
              </Button> : <button
                type="submit"
                className="w-full py-[15px] px-[20px] bg-blue-500 h-[46px] leading-[18px] rounded-[10px] text-base text-white font-bold font-nunito transition duration-300 hover:bg-blue-600"
              >
                Save
              </button>}
            </div>
          </div>

          {/* FORM FIELDS  */}
          <Row gutter={20}>
            <Col span={8}>
              <Form.Item
                className="global__input"
                name="email"
                label="E-mail:"
                rules={[
                  {
                    required: true,
                    message: "The Last Name field is required",
                  },
                ]}
              >
                <Input size="large" disabled />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                className="global__input"
                name="first_name"
                label="First Name:"
                rules={[
                  {
                    required: true,
                    message: "The First Name field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                className="global__input"
                name="last_name"
                label="Last Name:"
                rules={[
                  {
                    required: true,
                    message: "The Last Name field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={8}>
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
                <PhoneInput
                    placeholder="Phone number"
                    disableSearchIcon={true}
                    specialLabel=""
                    country={"eg"}
                  />
              </Form.Item>
            </Col>
            {role === "Teacher" && (
              <Col span={8}>
                <Form.Item
                  className="global__input"
                  name="subjects"
                  label="Subject:"
                  rules={[
                    {
                      required: true,
                      message: "The Phone field is required",
                    },
                  ]}
                >
                  <Select mode="multiple" optionLabelProp="label">
                    {subjects?.map((item) => (
                      <Option key={item.id} value={item.id} label={item.name}>
                        <div className="demo-option-label-item">
                          {item.name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            )}
            {role === "Teacher" && (
              <Col span={8}>
                <Form.Item
                  className="global__input"
                  name="classes_tools"
                  label="Class Tools:"
                  rules={[
                    {
                      required: true,
                      message: "The Phone field is required",
                    },
                  ]}
                >
                  <Select mode="multiple" optionLabelProp="label">
                    {classTools?.map((item) => (
                      <Option key={item.id} value={item.id} label={item.name}>
                        <div className="demo-option-label-item">
                          {item.name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            )}
          </Row>
        </Form>

        <ProfileUploadModal open={openModal} close={setOpenModal} />
      </div>
    );
  } else {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }
};

export default Profile;
