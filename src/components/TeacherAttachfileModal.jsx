import { Button, Form, Modal, Upload } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import {addNewAttach} from "../app/features/teacherAttachmentList"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const TeacherAttachfileModal = ({ open, close }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {fetchData} = useAuth()
  const {id} = useParams()
  const URL = `classrooms/${id}/teacher-attachment-create/`

  const handleAttach = ({attach}) => {
    const attachFile = new FormData()
    attachFile.append("file", attach.file)
    attachFile.append("classroom", id)
    setLoading(true);
    fetchData
      .post(URL, attachFile)
      .then((res) => {
        dispatch(addNewAttach(res?.data))
        setLoading(false);
        close(false);
        toast.success("Attach file uploaed successfully!", {
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
      .catch((err) => {
        setLoading(false);
        close(false);
      });
  };


  return (
    <Modal open={open} onCancel={() => close(false)} footer={null}>
      <div className="pt-[10px] pb-[10px] px-[10px] sm:px-[10px]">
        <div className="mb-[1.875rem] font-nunito">
          <h3 className="text-[24px] leading-[30px] font-extrabold">
          Upload files
          </h3>
        </div>
        <Form name="teacherAttach"  onFinish={handleAttach} >
          <Form.Item name="attach" valuePropName="name">
            <Upload beforeUpload={() => false} >
              <div className="flex items-center justify-center w-full h-20 px-4 mb-3 transition bg-white border-2 border-gray-200 border-dashed appearance-none cursor-pointer hover:border-gray-200 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="lightgray"
                      strokeWidth="2"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                  </span>
                  <span className="font-medium text-black font-nunito">
                    Drop file to attach, or{" "}
                    <span className="font-medium font-nunito text-blue-300 underline">
                      browse
                    </span>
                  </span>
                </span>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <div className="w-full flex items-center justify-between gap-4">
              {loading ? (
                <Button
                  disabled
                  className="login-form-button !w-full !py-[1.125rem] !rounded-[10px] !h-auto !font-bold !text-[17px]"
                  block
                  size="large"
                  loading
                >
                  Processing...
                </Button>
              ) : (
                <button
                  type="submit"
                  className="w-full text-center py-[1.125rem] bg-blue-500 border-0 rounded-[10px] font-bold font-nunito text-[17px] text-white hover:bg-blue-600"
                >
                  Upload
                </button>
              )}
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default TeacherAttachfileModal;
