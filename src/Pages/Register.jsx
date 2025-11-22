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
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#6af63370] via-[#0cf53610] to-[#3beb9e90]">
        {/* <div className="hero-content flex-col lg:flex-row-reverse">
        </div> */}

        <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-white/20 shadow-2xl shadow-[#00000080] backdrop-blur-lg bg-white/30">
          <div className="card-body ">
            <div>
              <h1 className="text-2xl font-bold text-center py-4 border-b-1 border-base-300">
                Register Your Account
              </h1>
            </div>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset mt-3">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* photo url */}
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <div className="text-center font-bold pt-2">
                  <p className="text-gray-500">
                    Already Have an Account?{" "}
                    <Link to="/auth/login" className="text-red-600">
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
