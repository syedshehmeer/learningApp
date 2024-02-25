import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { AiOutlineDown } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" w-full py-5 bg-black text-white">
        <div className="flex w-[95%] justify-center mx-auto items-center">
          <div>
            <ul className="flex gap-6">
              <li>
                <Link to="/">
                  <p className="text-sm mr-10 text">
                    Copyright © coderFactory Pvt. Ltd.
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
