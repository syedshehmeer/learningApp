import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <FormContainer>
        <h1 className="mb-10 text-2xl font-bold">Update Profile</h1>
        <form onSubmit={handleSubmit} className="flex-col">
          <div className="mt-2">
            <label className="mt-2">Name</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="mt-2">
            <label className="">Email</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mt-2">
            <label className="mt-2">Password</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mt-2">
            <label className="">Confirm Password</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <p className="my-4">
            Payment Status:
            {userInfo.paid ? (
              <span className="text-green-500 font-bold ml-3">Paid</span>
            ) : (
              <span className="text-red-700 font-bold ml-3">Unpaid</span>
            )}
          </p>

          <p className=" text-sm text-red-700 mt-2"></p>
          {isLoading ? (
            <button className="bg-blue-500 w-full py-2 mt-5 rounded text-[#ffffff]">
              Loading...
            </button>
          ) : (
            <button className="bg-orange-700 w-full py-2 mt-5 rounded text-[#ffffff]">
              Update
            </button>
          )}
        </form>
      </FormContainer>
    </>
  );
};

export default ProfileScreen;
