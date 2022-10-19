import { Button, Modal } from "antd";
import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import StripeContainer from "./StripeContainer";

const AddNewCardModal = ({ openAddNew, setOpenAddNew }) => {
  return (
    <Modal
      open={openAddNew}
      onCancel={() => setOpenAddNew(false)}
      footer={null}
    >
      <div className="mb-4 font-nunito">
        <h3 className="text-[24px] leading-[30px] font-extrabold m-0">
          Add Payment Method
        </h3>
      </div>
      <StripeContainer setOpenAddNew={setOpenAddNew} />
    </Modal>
  );
};

export default AddNewCardModal;
