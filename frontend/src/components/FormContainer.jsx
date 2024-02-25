import React from "react";

const FormContainer = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen text-[#343434] bg-[#ffffff]">
        <div className="p-10 mt-14 rounded-lg flex-col md:w-[30%]   w-[90%]  justify-center mx-auto bg-slate-100">
          {children}
        </div>
      </div>
    </>
  );
};

export default FormContainer;
