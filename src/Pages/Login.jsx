import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body ">
          <div>
            <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
              Login Your Account
            </h1>
          </div>
          <fieldset className="fieldset mt-3">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <div className="text-center font-bold pt-2">
              <p className="text-gray-500">
                Don't Have an Account? <Link to="/auth/register" className="text-red-600">Register</Link>
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
