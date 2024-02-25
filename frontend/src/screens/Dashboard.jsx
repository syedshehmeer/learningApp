import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  {
    id: "1",
    title: "Course : HTML",
    link: "mJgBOIoGihA",
  },
  {
    id: "2",
    title: "Course : CSS",
    link: "n4R2E7O-Ngo",
  },
  {
    id: "3",
    title: "Course : JavaScript",
    link: "EfAl9bwzVZk",
  },
  {
    id: "4",
    title: "Course : React",
    link: "RVFAyFWO4go",
  },
  {
    id: "5",
    title: "Course : NodeJS",
    link: "f2EqECiTBL8",
  },
  {
    id: "6",
    title: "Course : MERN",
    link: "CvCiNeLnZ00",
  },
  {
    id: "7",
    title: "Course : Typescript",
    link: "gieEQFIfgYc",
  },
  {
    id: "8",
    title: "Course : TailwindCSS",
    link: "lCxcTsOHrjo",
  },
];

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [currentVideoNo, setCurrentVideoNo] = useState(data[0].id);
  const [currentVideoLink, setCurrentVideoLink] = useState(data[0].link);
  console.log(userInfo);
  useEffect(() => {
    if (userInfo.paid == false) {
      navigate("/payment");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <div className="w-full min-h-screen flex items-center">
        <div className="flex  flex-col lg:flex-row text-center  mx-auto border-rounded-md w-[95%] ">
          <div className="w-full lg:w-[60%] px-5">
            <iframe
              className="  w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${currentVideoLink}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              loading="lazy"
            />

            {/* <ReactPlayer
              controls
              url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            /> */}
          </div>
          <div className="mt-10 lg:mt-0 flex w-full lg:w-[40%] items-start lg:items-center flex-col ">
            {data.map((data) => {
              return (
                <div
                  onClick={() => {
                    setCurrentVideoNo(data.id);
                    setCurrentVideoLink(data.link);
                  }}
                  key={data.id}
                  className={
                    currentVideoNo == data.id
                      ? "flex flex-col bg-gray-900 w-[100%] mb-2 shadow-gray-400 shadow-sm p-4 cursor-pointer rounded-md text-start text-white text-ellipsis"
                      : "flex flex-col bg-gray-100 w-[100%] mb-2 shadow-gray-400 shadow-sm p-4 cursor-pointer rounded-md text-start text-ellipsis"
                  }
                >
                  <strong className="text-xs md:text-base">
                    {data.id}. {data.title}
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
