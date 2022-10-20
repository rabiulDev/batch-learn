import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "antd";
import React, { useState } from "react";
import useAuth from "../auth/useAuth";
import { loadSavedCards } from "../app/features/savedCards";
import { toast } from "react-toastify";
import {useDispatch } from 'react-redux'
import {closeAddNewCardModal} from "../app/features/addNewCardModal"



const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#eff2f8",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Open Sans, Segoe UI, sans-serif",
      fontSize: "15px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fff" },
      "::placeholder": { color: "#eff2f8" },
    },
    invalid: {
      iconColor: "#FF4A4A",
      color: "#FF4A4A",
    },
  },
};

const PaymentForm = () => {
  const { fetchData } = useAuth();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardElement);

    if (!stripe || !elements) {
      return;
    }
    const { token, error: tokenError } = await stripe.createToken(card);

   !tokenError && setLoading(true);
   !tokenError && fetchData
      .post("billing/payment-methods/", { stripe_token: token.id })
      .then((response) => {
        setLoading(false);
        dispatch(closeAddNewCardModal());
        toast.success("Payment method added successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        dispatch(loadSavedCards(fetchData));
      })
      .catch(() => {
        setLoading(false);
        dispatch(closeAddNewCardModal());
        toast.error("Something is wrong", {
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

    // console.log("error ", tokenError);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: card,
    //   billing_details: {
    //     name: "Name is here",
    //   },
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pt-[10px] pb-[10px] px-[10px] sm:px-[10px]"
    >
      <fieldset className="mb-10">
        <CardElement options={CARD_OPTIONS} />
      </fieldset>
      <div className="w-full">
        {loading ? (
          <Button
            disabled
            className="login-form-button login_btn_loading"
            block
            size="large"
            loading
          >
            Processing
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button login_btn"
            block
            size="large"
          >
            Submit
          </Button>
        )}
      </div>
    </form>
  );
};

export default PaymentForm;
