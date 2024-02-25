import React, { useEffect } from "react";
import {
  FaFlagCheckered,
  FaGraduationCap,
  FaLaptop,
  FaPause,
  FaReact,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeFeaturesSection = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div className=" w-full h-screen flex  bg-slate-100">
        <div className="flex mx-auto w-[80%] flex-col   items-center">
          <h1 className="text-2xl font-sans font-bold  mt-20 text-center">
            This is where you embark on an amazing journey!
          </h1>
          <div className="mt-5 w-full flex-col flex items-center justify-center">
            <div>
              <div className=" flex gap-5 mt-10 items-center ">
                <div className="flex bg-white rounded-full w-[35px] h-[35px] md:w-[60px] md:h-[60px]  object-contain items-center justify-center">
                  <FaFlagCheckered className="h-8 w-8 md:h-10 md:w-10 " />
                </div>
                <strong>Weekly milestones to keep you motivated</strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <div className="flex bg-white rounded-full w-[35px] h-[35px] md:w-[60px] md:h-[60px]  object-contain items-center justify-center">
                  <FaGraduationCap className="h-8 w-8 md:h-10 md:w-10 " />
                </div>
                <strong>
                  A structured curriculum that makes learning easy
                </strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <div className="flex bg-white rounded-full w-[35px] h-[35px] md:w-[60px] md:h-[60px]  object-contain items-center justify-center">
                  <FaLaptop className="h-8 w-8 md:h-10 md:w-10 " />
                </div>
                <strong>Watch lessons any time at your convenience</strong>
              </div>
              <div className=" flex gap-5 mt-10 items-center ">
                <div className="flex bg-white rounded-full w-[35px] h-[35px] md:w-[60px] md:h-[60px]  object-contain items-center justify-center">
                  <FaPause className="h-8 w-8 md:h-10 md:w-10 " />
                </div>
                <strong>Cheat days when life is calling you elsewhere</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeaturesSection;
