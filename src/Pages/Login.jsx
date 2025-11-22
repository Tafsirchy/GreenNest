import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#aff63390] via-[#0c9cf510] to-[#e83beb90]">
      {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}

      <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-white/20 shadow-2xl shadow-[#00000080] backdrop-blur-lg bg-white/30 ">
        <div className="card-body ">
          <div>
            <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
              Login Your Account
            </h1>
          </div>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset mt-3">
              {/* login */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <Link to="/" type="submit" className="btn btn-neutral mt-4">
                Login
              </Link>
              <div className="text-center font-bold pt-2">
                <p className="text-gray-500">
                  Don't Have an Account?{" "}
                  <Link to="/auth/register" className="text-red-600">
                    Register
                  </Link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
