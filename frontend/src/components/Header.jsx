import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [menu, showMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      showMenu(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="top-0 absolute w-full py-5 bg-black text-white">
        <div className="flex w-[95%] justify-between mx-auto items-center">
          <div>
            <ul className="flex gap-6">
              <li>
                <Link to="/">
                  <strong className="text-lg mr-10 text-orange-700">
                    coderFactory
                  </strong>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {userInfo ? (
              <>
                <div className="flex items-center cursor-pointer">
                  <div
                    onClick={() => {
                      showMenu(!menu);
                    }}
                    className="flex items-center"
                  >
                    <h1 className="text-white  pr-2">{userInfo.name}</h1>
                    <AiOutlineDown color="white" />
                  </div>

                  {menu ? (
                    <>
                      <div className=" rounded-b-md absolute top-[68px] w-[150px] right-[2%] flex-col  bg-black text-white">
                        <ul className="">
                          <li className=" py-2 px-2 hover:bg-slate-100 hover:text-[#343434]">
                            <Link to="/dashboard">Courses</Link>
                          </li>
                          <li className=" py-2 px-2 hover:bg-slate-100 hover:text-[#343434]">
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li
                            onClick={handleLogout}
                            className="rounded-b-md py-2 px-2 hover:bg-slate-100 bg-orange-700 hover:text-[#343434]"
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <ul className="flex gap-6">
                  <li>
                    <Link to="/login">SignIn</Link>
                  </li>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
