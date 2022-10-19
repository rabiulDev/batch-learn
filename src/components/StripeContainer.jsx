import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const stripePromise = loadStripe("pk_test_51Lh8cpHW3gXO54jhjpE5rxr12YCUAf0r78aOxktLCs8mZ60wgSFrwqndycCBrlBCUNBJoOg1WykZGCwHB72sm9Qv00CH2OpSz6");

const StripeContainer = ({setOpenAddNew}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm setOpenAddNew={setOpenAddNew}/>
    </Elements>
  );
};

export default StripeContainer;