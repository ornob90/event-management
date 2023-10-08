import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const { signUpMethod } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      setErrorMsg("Password Length Must Be More Then 6 Characters!!");
      return;
    }

    if (/^[^A-Z]*$/.test(password)) {
      setErrorMsg("Password must contain atleast one capital letter");
      return;
    }

    if (/^[a-zA-Z0-9\s]*$/.test(password)) {
      setErrorMsg("Password must contain a special character");
      return;
    }

    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
    e.target.photo.value = "";

    signUpMethod(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
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
                  required
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {showPass ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-[45%] right-[5%] text-xl"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-[45%] right-[5%] text-xl"
                  />
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-600 font-medium">{errorMsg}</p>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              Already Have an account?
              <NavLink
                className="text-blue-700 border-b-2 border-blue-700"
                to="/login"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
