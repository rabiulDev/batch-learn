import {Modal} from "antd";
import React from "react";
import StripeContainer from "./StripeContainer";
import { useSelector, useDispatch } from 'react-redux'
import {closeAddNewCardModal} from "../app/features/addNewCardModal"

const AddNewCardModal = () => {
const dispatch = useDispatch();
const {openModal} = useSelector((state)=> state.addNewCardModal)

  return (
    <Modal
      open={openModal}
      onCancel={() => dispatch(closeAddNewCardModal())}
      footer={null}
    >
      <div className="mb-4 font-nunito">
        <h3 className="text-[24px] leading-[30px] font-extrabold m-0">
          Add Payment Method
        </h3>
      </div>
      <StripeContainer />
    </Modal>
  );
};

export default AddNewCardModal;
