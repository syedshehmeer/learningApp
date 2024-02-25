import React, { useEffect } from "react";
import {
  FaFlagCheckered,
  FaGraduationCap,
  FaLaptop,
  FaPause,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeCoursesSection = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div className=" w-full min-h-screen flex  bg-slate-100">
        <div className="flex mx-auto w-[80%] flex-col   items-center">
          <h1 className="text-2xl font-sans font-bold  mt-20 text-center">
            Course curriculum for the curious
          </h1>
          <div className="mt-10 mb-20 w-full flex-col gap-5 text-black  flex items-center justify-center">
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>HTML</strong>
              <strong>4 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>CSS</strong>
              <strong>11 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>JavaScript</strong>
              <strong>8 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>ReactJS</strong>
              <strong>9 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>NodeJS</strong>
              <strong>7 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>MERN</strong>
              <strong>8 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>TypeScript</strong>
              <strong>8 hrs</strong>
            </div>
            <div className="flex p-4 w-full md:w-1/2 justify-between bg-white">
              <strong>TailwindCSS</strong>
              <strong>3 hrs</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCoursesSection;
