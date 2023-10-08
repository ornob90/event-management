import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInMethod, googleSignInMethod } = useContext(AuthContext);
  const emailRef = useRef();
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";

    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");

        Swal.fire({
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });

        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignInMethod()
      .then((res) => {
        setErrorMsg("");
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="relative form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {!showPass ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-[44%] right-[8%] text-xl"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-[44%] right-[8%] text-xl"
                  />
                )}
                <label className="label">
                  <NavLink href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </NavLink>
                </label>
              </div>
              {errorMsg && (
                <p className="text-red-600 font-medium text-sm">{errorMsg}</p>
              )}
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:bg-black hover:text-white">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-ghost hover:bg-black hover:text-white border border-black mt-4"
                >
                  Sign In With Google
                </button>
              </div>
            </form>
            <p>
              New? Please{" "}
              <NavLink
                className="text-blue-700 border-b-2 border-blue-700"
                to="/signup"
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
