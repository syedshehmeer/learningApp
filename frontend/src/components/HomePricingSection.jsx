import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FaAngleDoubleDown,
  FaAngleDown,
  FaArrowDown,
  FaCheck,
  FaFlagCheckered,
  FaGraduationCap,
  FaLaptop,
  FaPause,
  FaReact,
} from "react-icons/fa";

const HomePricingSection = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div className=" w-full h-screen flex  bg-slate-50">
        <div className="flex mx-auto w-[80%] flex-col   items-center">
          <h1 className="text-2xl font-sans font-bold  mt-20 text-center">
            Pricing
          </h1>
          <div className="mt-5 p-10 w-full md:w-3/4 flex-col bg-white shadow-sm shadow-gray-400 rounded-lg flex items-center justify-center">
            <h1 className="text-xl font-sans font-bold text-orange-700 ">
              Lifetime access to all content
            </h1>
            <div className="flex flex-col items-start text-xl">
              <div className=" flex gap-5 mt-10 items-center ">
                <FaCheck classname="text-green-500" />

                <strong>Frontend Development + React</strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <FaCheck classname="text-green-500" />

                <strong>Backend Development</strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <FaCheck classname="text-green-500" />

                <strong>Projects</strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <FaCheck classname="text-green-500" />

                <strong>Devops</strong>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 mt-10  justify-end items-end">
              <strong className="text-4xl ">$400 </strong>
              <Link to="/dashboard">
                <button className="flex items-center gap-2 justify-center bg-orange-700 text-white text-xl font-bold rounded-lg px-8 py-3">
                  Enroll now <FaAngleDoubleDown />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePricingSection;
