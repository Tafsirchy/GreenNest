import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <div className="card-body ">
            <div>
              <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
                Register Your Account
              </h1>
            </div>
            <fieldset className="fieldset mt-3">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
              <div className="text-center font-bold pt-2">
                <p className="text-gray-500">
                  Already Have an Account?{" "}
                  <Link to="/auth/login" className="text-red-600">
                    Login
                  </Link>
                </p>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
