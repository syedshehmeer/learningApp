import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OkLsaFh57IGFnueteI87MQ9WHEiVyssduRWgxuQNe5rVBWOYrUvl7DjqI9g4ktAAL251nsvSATDaKLZo0shWbUL00f25HFcQm"
    );

    const body = {
      user: userInfo,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://learning-app-backend.vercel.app/api/users/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    console.log(data);
    console.log(response);
    const { id: sessionId } = data; // Extracting session ID from the response

    const result = await stripe.redirectToCheckout({
      sessionId: data.session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col justify-center text-center py-10 items-center gap-10">
          <strong className="text-4xl text-orange-700">coderFactory</strong>
          <strong className="text-3xl ">
            All of coderfactory courses. No interruptions.
          </strong>
          <p className="text-xl ">
            Lifetime access to all courses. $400/one time payment.
          </p>

          <button
            className="bg-orange-700 text-white font-semibold p-4 px-10 rounded "
            onClick={makePayment}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
