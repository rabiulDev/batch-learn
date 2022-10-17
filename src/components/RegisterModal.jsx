import { Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RegisterModal = ({ open, setOpen }) => {
  return (
    <Modal centered open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className="pt-5 pb-5 px-5 sm:px-[30px] flex flex-col justify-center items-center">
        <div className="mb-[1.875rem] font-nunito">
          <h3 className="text-[24px] leading-[30px] font-extrabold  text-center max-w-[260px] mx-auto">
            Register with
            <span className="text-blue-500"> Batch Learn</span>
          </h3>
          <p className="text-center text-gray-400 font-semibold mt-2.5 text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 sm:gap-[1.625rem]">
          <Link
            to="/register-student"
            className="cursor-pointer w-[150px] sm:w-[180px] rounded-[14px] shadow-lg hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:shadow-none"
          >
            <div className="flex flex-col p-8 items-center">
              <div className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-yellow-400">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 9.29688C16.5673 9.29688 18.6484 7.2157 18.6484 4.64844C18.6484 2.08118 16.5673 0 14 0C11.4327 0 9.35156 2.08118 9.35156 4.64844C9.35156 7.2157 11.4327 9.29688 14 9.29688Z"
                    fill="white"
                  ></path>
                  <path
                    d="M17.4157 9.92676C16.4315 10.5659 15.2584 10.9377 14 10.9377C12.7416 10.9377 11.5685 10.5659 10.5843 9.92676C9.49625 10.3425 8.48748 10.956 7.61035 11.7433L14 14.1394L20.3896 11.7433C19.5125 10.956 18.5037 10.3425 17.4157 9.92676Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.8438 16.9531H23.2969C22.8438 16.9531 22.4766 17.3204 22.4766 17.7734V19.9609C22.4766 20.414 22.8438 20.7812 23.2969 20.7812H23.8438C24.9009 20.7812 25.7578 19.9243 25.7578 18.8672C25.7578 17.8101 24.9009 16.9531 23.8438 16.9531Z"
                    fill="white"
                  ></path>
                  <path
                    d="M4.78275 12.8122C4.56159 12.9654 4.42969 13.2173 4.42969 13.4864V15.3127H4.70312C6.06009 15.3127 7.16406 16.4167 7.16406 17.7736V19.9611C7.16406 21.3181 6.06009 22.4221 4.70312 22.4221H4.42969V24.1505C4.42969 24.4924 4.64182 24.7985 4.96196 24.9185L13.1797 28.0002V15.5839L5.53804 12.7183C5.28609 12.6238 5.00385 12.6588 4.78275 12.8122Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.8359 19.9611V17.7736C20.8359 16.4167 21.9399 15.3127 23.2969 15.3127H23.5703V13.4864C23.5703 13.2173 23.4384 12.9654 23.2173 12.8122C22.9961 12.6588 22.7138 12.6238 22.462 12.7183L14.8203 15.5839V28.0002L23.038 24.9185C23.3582 24.7985 23.5703 24.4924 23.5703 24.1505V22.4221H23.2969C21.9399 22.4221 20.8359 21.3181 20.8359 19.9611Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.52344 19.9609V17.7734C5.52344 17.3204 5.15616 16.9531 4.70312 16.9531H4.15625C3.09914 16.9531 2.24219 17.8101 2.24219 18.8672C2.24219 19.9243 3.09914 20.7812 4.15625 20.7812H4.70312C5.15616 20.7812 5.52344 20.414 5.52344 19.9609Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="mt-[1.125rem] text-center">
                <h4 className="text-black font-semibold font-nunito text-[18px] leading-[25px]">
                  Student
                </h4>
              </div>
            </div>
          </Link>
          <Link
            to="/register-teacher"
            className="cursor-pointer w-[150px] sm:w-[180px] rounded-[14px] shadow-lg hover:ring-2 hover:ring-blue-500 ease-in-out duration-300 hover:shadow-none h-full"
          >
            <div className="flex flex-col p-8 items-center">
              <div className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-blue-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 10.2007C14.8171 10.2007 17.1006 7.91716 17.1006 5.10033C17.1006 2.28349 14.8171 0 12.0002 0C9.1834 0 6.8999 2.28349 6.8999 5.10033C6.8999 7.91716 9.1834 10.2007 12.0002 10.2007Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M14.1635 10.5479H9.83602C6.23614 10.5479 3.30664 13.4771 3.30664 17.0775V22.371L3.31997 22.4536L3.68494 22.5677C7.1207 23.641 10.1062 23.9997 12.5635 23.9997C17.3622 23.9997 20.1442 22.6308 20.3166 22.544L20.6573 22.371H20.6931V17.0775C20.6934 13.4771 17.7645 10.5479 14.1635 10.5479ZM13.0078 20.8205L12.0741 22.187C12.0614 22.2057 12.0412 22.2167 12.019 22.2167C12.0184 22.2167 12.0178 22.2167 12.0172 22.2167C11.9953 22.2167 11.9743 22.2051 11.9621 22.1858L11.0947 20.8184C11.0873 20.8069 11.0838 20.7929 11.0844 20.7781L11.5184 14.1415C11.5207 14.1063 11.5495 14.0796 11.585 14.0796H12.4853C12.5205 14.0796 12.5496 14.1063 12.5525 14.1415L13.0188 20.7775C13.0206 20.7932 13.0161 20.8077 13.0078 20.8205ZM12.5854 13.8787H11.5151L10.5846 11.9556C10.5846 11.771 10.7339 11.6223 10.9185 11.6223H13.153C13.337 11.6223 13.4863 11.771 13.4863 11.9556L12.5854 13.8787Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="mt-[1.125rem] text-center">
                <h4 className="text-black font-semibold text-[18px] leading-[25px] font-nunito">
                  Teacher
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
