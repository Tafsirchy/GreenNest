import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
    .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        form.reset();
    })
    .catch((error) =>{
        alert(error);
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#f3faef] to-[#d3e6dd]">
        {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}

        <div className="card max-w-sm shrink-0 border  w-full backdrop-blur-lg bg-white/10  border-white/20 shadow-2xl rounded-2xl">
          <div className="card-body ">
            <div>
              <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
                Register Your Account
              </h1>
            </div>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset mt-3">
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
                <button
                  type="submit"
                  className="btn mt-4 bg-[#043915] hover:bg-[#046b21] text-white"
                >
                  Register
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
