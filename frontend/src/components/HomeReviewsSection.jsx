import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeReviewsSection = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url('src/assets/bg.jpg')",
        //   backgroundSize: "cover",
        //   opacity: 1,
        //   backgroundColor: "black",
        // }}
        className="relative w-full  flex  bg-slate-50"
      >
        <div className=" w-full my-20  flex  ">
          <div className="flex mx-auto w-[90%] flex-col   items-center">
            <h1 className="text-2xl text-black font-sans font-bold   text-center">
              Love from our alumni
            </h1>
            <div className="mt-20 w-full flex flex-col lg:flex-row gap-10 items-center justify-center">
              <div className=" w-full  flex flex-col md:flex-row   items-center gap-16 justify-center">
                <div className="w-[90%] mx-auto md:w-[40%] shadow-lg h-[310px] rounded-xl flex flex-col p-5 overflow-ellipsis text-black items-center  bg-white">
                  <strong>Asgar Ayub</strong>
                  <strong className="text-sm text-center">
                    Software Developer - Azon{" "}
                  </strong>
                  <p className="overflow-hidden mt-2">
                    "I have been associated with Coding Ninjas both as a
                    student(Machine Learning Course), and as a Teaching
                    Assistant(DS and Algo using JAVA). The most useful thing I
                    found, was the well defined and structured course work.
                    Every class is followed by relevant assignment work, and
                  </p>
                </div>
                <div className="w-[90%] mx-auto md:w-[40%] shadow-lg h-[310px] rounded-xl flex flex-col p-5 overflow-ellipsis text-black items-center  bg-white">
                  <strong>Syed Javed</strong>
                  <strong className="text-sm text-center">
                    Software Developer - RV Tech{" "}
                  </strong>
                  <p className="overflow-clip mt-2">
                    "I was part of the first batch for their online course and I
                    am glad I opted for this one. The course is well structured
                    explaining everything you need to know when you are starting
                    to program. The instructors are well versed in the concepts,
                    they help each individual to tackle the problems faced
                    during the concept building. I remeber it druing my BTech
                    days I used to code at late nights due to long lecture
                    hours; the TA support is really great, they are always there
                    to help and resolve the issues, clear the doubts even help
                    solving the problem with better approach. If you are about
                    to begin it will be best choice. The courses are at
                    affordable price and they provide various payment options as
                    well so anyone can buy them."
                  </p>
                </div>
              </div>
              <div className=" w-full  flex flex-col md:flex-row  items-center gap-16 justify-center">
                <div className="w-[90%] mx-auto md:w-[40%] shadow-lg h-[310px] rounded-xl flex flex-col p-5 overflow-ellipsis text-black items-center  bg-white">
                  <strong>Ali Khan</strong>
                  <strong className="text-sm text-center">
                    Software Developer - EEC{" "}
                  </strong>
                  <p className="overflow-hidden mt-2">
                    They are not just teachers, but mentors. TAs were always
                    available. I wholeheartedly recommend Coding Ninjas for
                    anyone prepping for placements.
                  </p>
                </div>
                <div className="w-[90%] mx-auto md:w-[40%] shadow-lg h-[310px] rounded-xl flex flex-col p-5 overflow-ellipsis text-black items-center  bg-white">
                  <strong>Faisal Akhtar</strong>
                  <strong className="text-sm text-center">
                    Software Developer - DA{" "}
                  </strong>
                  <p className="overflow-clip mt-2">
                    I feel it is worth the money. I had enrolled in their C++
                    course, the lecture quality was top-notch. Also, the TA
                    support was really good. All in all, it can be a good option
                    for people who don’t know how to start their coding journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeReviewsSection;
