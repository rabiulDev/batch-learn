import { Button, Modal } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../auth/useAuth";
import { useDispatch } from "react-redux";
import { loadSavedCards } from "../app/features/savedCards";

const DeleteCardConfirmModal = ({ deleteCard, setDeleteCard }) => {
    const dispatch = useDispatch()
  const { fetchData } = useAuth();
  const [loading, setLoading] = useState(false);
  const confirmDeleteCard = () => {
    setLoading(true);
    fetchData
      .delete(`billing/payment-methods/${deleteCard}`)
      .then((res) => {
        // res = status: 'success'
        setLoading(false);
        setDeleteCard(false)
        toast.success("Your card has been removed successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          dispatch(loadSavedCards(fetchData))
        
      })
      .catch((err) => {
        setLoading(false);
        setDeleteCard(false)
        toast.error(err.response.data.non_field_errors[0], {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      });
  };
  return (
    <Modal
      open={deleteCard}
      onCancel={() => setDeleteCard(false)}
      footer={null}
    >
      <div className="pt-[10px] pb-[10px] px-[10px] sm:px-[10px]">
        <div className="mb-[1.875rem] font-nunito">
          <h3 className="text-[24px] leading-[30px] font-extrabold">
            Do you want to remove your card?
          </h3>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <button
            onClick={() => setDeleteCard(false)}
            className=" w-1/2 text-center py-[1.125rem] bg-white border-[1px] border-gray-300 rounded-[10px] font-bold font-nunito text-[17px] text-gray-700"
          >
            No
          </button>

          {loading ? (
            <Button
              disabled
              className="login-form-button !w-1/2 !py-[1.125rem] !rounded-[10px] !h-auto !font-bold !text-[17px]"
              block
              size="large"
              loading
            >
              Processing...
            </Button>
          ) : (
            <button
              onClick={confirmDeleteCard}
              className="w-1/2 text-center py-[1.125rem] bg-blue-500 border-0 rounded-[10px] font-bold font-nunito text-[17px] text-white hover:bg-blue-600"
            >
              Yes
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCardConfirmModal;
