import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import { useUpdateUserMutation } from "../slices/usersApiSlice";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        paid: true,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      // toast.success("Profile updated");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    handleSubmit(); // Call handleSubmit when component mounts
  }, []);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-10">
          <FaCheckCircle className="w-20 h-20 text-green-600" />
          <strong className="text-3xl ">Payment Successful</strong>
          <Link to="/dashboard">
            <div className="flex items-center gap-3 mt-10 text-orange-700">
              <p className="font-semibold">Go to courses </p>
              <FaArrowRight className="font-light mt-1" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessScreen;
