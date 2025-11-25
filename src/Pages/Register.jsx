import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, handleGoogleSignIn, updateUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }
    if (!uppercase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowercase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        setUser(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#f3faef] to-[#d3e6dd]">
        {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}

        <div className="card max-w-sm shrink-0 border  w-full backdrop-blur-lg bg-white/10  border-white/20 shadow-2xl rounded-2xl">
          <div className="card-body ">
            <div>
              <h1 className="text-2xl font-bold text-center py-2 border-b-1 border-base-300">
                Register Your Account
              </h1>
            </div>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset mt-1">
                <label className="label text-black font-semibold">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                {/* email */}
                <label className="label text-black font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* photo url */}
                <label className="label text-black font-semibold">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                {/* password */}
                <label className="label text-black font-semibold">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                  to="/"
                  type="submit"
                  className="btn mt-4 bg-[#043915] hover:bg-[#046b21] text-white"
                >
                  Register
                </button>
                <button
                  onClick={googleSignUp}
                  className="my-3 btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Continue with Google
                </button>
                <div className="text-center text-sm  pt-2">
                  <p className="text-black">
                    Already Have an Account?{" "}
                    <Link
                      to="/auth/login"
                      className="text-[#043915] font-bold hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
