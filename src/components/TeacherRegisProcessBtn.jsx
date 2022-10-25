import { Button } from "antd";
import React from "react";

const TeacherRegisProcessBtn = () => {
  return (
    <Button
      className="!flex !items-center !justify-center !py-7 !font-nunito !font-bold !text-base !rounded-[0.625rem]"
      disabled
      loading
      size="large"
      block
    >
      Processing
    </Button>
  );
};

export default TeacherRegisProcessBtn;
