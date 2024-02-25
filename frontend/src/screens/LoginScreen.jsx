import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      {
        navigate("/dashboard/");
      }
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OkLsaFh57IGFnueteI87MQ9WHEiVyssduRWgxuQNe5rVBWOYrUvl7DjqI9g4ktAAL251nsvSATDaKLZo0shWbUL00f25HFcQm"
    );

    const body = {
      user: userInfo,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:5000/api/users/checkout", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <FormContainer>
        <h1 className="mb-10 text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex-col">
          <div className="mt-2">
            <label className="mt-2">Email</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mt-2">
            <label className="">Password</label>
            <input
              className="w-full mt-3 p-3 rounded-md"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p className=" text-sm text-red-700 mt-2"></p>
          {isLoading ? (
            <button className="bg-orange-700 w-full py-2 mt-5 rounded text-[#ffffff]">
              Loading...
            </button>
          ) : (
            <button className="bg-orange-700 w-full py-2 mt-5 rounded text-[#ffffff]">
              Login
            </button>
          )}

          <p className="text-sm mt-2">
            Not registered?
            <Link to="/register">
              <span className="text-orange-700"> SignUp</span>
            </Link>
          </p>
        </form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
