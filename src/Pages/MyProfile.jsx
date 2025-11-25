import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { Edit3, Mail, UserRound } from "lucide-react";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    
    updateUser({
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photo });

      setIsOpen(false);
    });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen bg-gradient-to-b from-[#f3faef] to-[#dceade] py-16 ">
        <div className="max-w-2xl mx-auto">
          {/* Profile Card */}
          <div
            className={`card shadow-xl p-15 rounded-3xl border 
  border-gray-200 transition-all duration-300
  ${isOpen ? "bg-white" : "bg-transparent"}`}
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-36 h-36 rounded-full ring ring-[#043915] ring-offset-2 ring-offset-base-100 shadow-lg">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </div>
            </div>

            {/* Name & Email */}
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-[#043915] flex justify-center gap-2 items-center">
                <UserRound size={30} /> {user?.displayName}
              </h1>
              <p className="text-gray-700 mt-2 flex justify-center items-center gap-2">
                <Mail size={18} /> {user?.email}
              </p>

              {/* Update Button */}
              <button
                onClick={handleOpenForm}
                className="btn bg-[#043915] hover:bg-[#046b21] text-white font-semibold px-6 mt-6 flex items-center gap-2 mx-auto"
              >
                <Edit3 size={18} /> Update Profile
              </button>
            </div>

            {/* Update Form */}
            {isOpen && (
              <form
                onSubmit={handleUpdateForm}
                className="mt-6 mx-6 p-6 bg-white border border-gray-200 rounded-xl shadow-inner space-y-4 "
              >
                <h2 className="text-xl font-semibold text-[#043915] text-center">
                  Edit Information
                </h2>

                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Name</label>
                  <input
                    defaultValue={user?.displayName}
                    name="name"
                    type="text"
                    className="input input-bordered w-full rounded-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Photo URL */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Photo URL
                  </label>
                  <input
                    defaultValue={user?.photoURL}
                    name="photo"
                    type="text"
                    className="input input-bordered w-full rounded-lg"
                    placeholder="Photo URL"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn bg-[#043915] hover:bg-[#046b21] text-white font-semibold w-full rounded-lg"
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyProfile;
