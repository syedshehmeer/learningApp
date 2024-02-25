import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const UnsuccessfullScreen = () => {
  return (
    <>
      <div className="w-full h-screen">
        <h1 className="mt-20">Payment Unsuccessfull</h1>
      </div>
    </>
  );
};

export default UnsuccessfullScreen;
