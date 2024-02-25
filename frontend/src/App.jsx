import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="w-full h-screen bg-slate-50">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
