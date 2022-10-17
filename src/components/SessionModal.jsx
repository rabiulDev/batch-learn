import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  TimePicker,
} from "antd";
import React, { useState } from "react";
import moment from "moment";
import SessionConfirmModal from "./SessionConfirmModal";
const { Option } = Select;
const { TextArea } = Input;

const SessionModal = ({ openModal, setOpenModal, date }) => {
  const [form] = Form.useForm();
  const [openConfirm, setOpenConfirm] = useState(false)
  const handleFinish = (data) => {
    console.log(data);
    setOpenModal(false);
    setOpenConfirm(true)
    form.resetFields()
  };

  return (
    <>
      <Modal
        centered
        open={openModal}
        onCancel={() => (setOpenModal(false), form.resetFields())}
        footer={null}
      >
        <div className="pt-[26px] pb-[35px] px-[30px] sm:px-[30px]">
          <div className="mb-[1.875rem] font-nunito">
            <h3 className="text-[24px] leading-[30px] font-extrabold">
              Request new session
            </h3>
          </div>
          <Form
            onFinish={handleFinish}
            form={form}
            layout="vertical"
            requiredMark="optional"
            name="newSession"
            className="login-form"
            initialValues={{
              classDate: moment(date, "YYYY-MM-DD"),
              timePicker: moment(date, "HH-MM A"),
              remember: true,
            }}
          >
            <div className="mb-[28px]">
              <Form.Item
                className="global__input"
                name="title"
                label="Title:"
                rules={[
                  {
                    required: true,
                    message: "The title field is required",
                  },
                ]}
              >
                <Input size="large" placeholder="ENG - 324" />
              </Form.Item>
            </div>
            <div className="mb-[28px]">
              <Form.Item
                className="global__input"
                name="description"
                label="Description:"
                rules={[
                  {
                    required: true,
                    message: "The description field is required",
                  },
                ]}
              >
                <TextArea size="large" placeholder="Description" />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="subject"
                label="Subject:"
                rules={[
                  {
                    required: true,
                    message: "The Subject field is required",
                  },
                ]}
              >
                <Select
                  size="large"
                  style={{
                    width: "100%",
                  }}
                >
                  <Option value="math">Math</Option>
                  <Option value="chemistry">Chemistry</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="sm:flex sm:gap-6 w-full mb-[28px]">
              <Form.Item
                name="classDate"
                label="Class Date:"
                className=" sm:w-1/2"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker className="w-full" size="large" />
                {/*  onChange={} */}
              </Form.Item>

              <Form.Item
                name="timePicker"
                label="Start time:"
                className=" sm:w-1/2"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TimePicker className="w-full" size="large" />
                {/*  onChange={} */}
              </Form.Item>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button login_btn"
              block
              size="large"
              // onClick={()=>setOpenModal(false)}
            >
              Request new session
            </Button>
          </Form>
        </div>
      </Modal>

      <SessionConfirmModal openConfirm={openConfirm} setOpenConfirm={setOpenConfirm}/>
    </>
  );
};

export default SessionModal;
