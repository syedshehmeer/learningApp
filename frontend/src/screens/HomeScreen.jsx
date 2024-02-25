import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeFeaturesSection from "../components/HomeFeaturesSection";
import HomePricingSection from "../components/HomePricingSection";
import HomeCoursesSection from "../components/HomeCoursesSection";
import HomeReviewsSection from "../components/HomeReviewsSection";

const HomeScreen = () => {
  // const navigate = useNavigate();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);
  return (
    <>
      <div className=" w-full flex flex-col bg-white">
        <HomeHeroSection />
        <HomeFeaturesSection />
        <HomePricingSection />
        <HomeCoursesSection />
        <HomeReviewsSection />
      </div>
    </>
  );
};

export default HomeScreen;
