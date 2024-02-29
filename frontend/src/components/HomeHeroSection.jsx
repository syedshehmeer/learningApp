import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

const HomeHeroSection = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div className=" w-[full] py-20 min-h-screen flex text-black  bg-white justify-center items-center align-middle">
        <div className="w-[90%] md:w-[70%] flex flex-col-reverse md:flex-row justify-center  items-center align-middle mx-auto">
          <div className="w-[60%] flex flex-col justify-center   ">
            <strong className="text-4xl w-[80%]">
              Full Stack Web Development Course — MERN Stack
            </strong>
            <p className="mt-4 text-xl w-[90%]">
              Learn to build entire web applications from start to finish on one
              of the most versatile tech stacks : MongoDB, Express.js, React.js
              and Node.js (MERN stack)
            </p>
            <ul className="flex flex-wrap gap-10 mt-5 object-contain">
              <li>
                <FaReact size={40} className="text-blue-400" />
              </li>
              <li>
                <FaNodeJs size={40} className="text-green-600" />
              </li>
              <li>
                <SiExpress size={40} className="text-yellow-500" />
              </li>
              <li>
                <SiMongodb size={40} className="text-green-900" />
              </li>
            </ul>
          </div>
          <div className="w-[40%] my-10 flex flex-col justify-center  items-end ">
            <img
              src="./src/assets/davegray.jpg"
              className=" rounded-full w-80 object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
