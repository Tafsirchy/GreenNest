import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
import { Edit3, Mail, UserRound } from "lucide-react";
import img from "../assets/img.webp"

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenForm = () => {
    if (!user) return; // Guests can't edit
    setIsOpen(!isOpen);
  };

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser({
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photo });
      setIsOpen(false);
      setLoading(false);
    });
  };

  return (
    <div>
      <Navbar />

      <main className="min-h-screen py-16 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="card p-10 bg-white shadow-xl rounded-3xl">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-36 h-36 rounded-full ring ring-green-700 ring-offset-2 shadow-lg">
                  <img
                  className="w-full h-full"
                    src={
                      user?.photoURL || img
                      
                    }
                    alt="User"
                  />
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center mt-5">
              <h1 className="text-3xl font-bold text-green-900 flex justify-center items-center gap-2">
                <UserRound size={28} />
                {user?.displayName || "Guest User"}
              </h1>

              <p className="text-gray-600 mt-2 flex justify-center items-center gap-2">
                <Mail size={18} />
                {user?.email || "Not logged in"}
              </p>

              <button
                onClick={handleOpenForm}
                disabled={!user}
                className={`btn mt-6 px-6 font-semibold mx-auto flex items-center gap-2 ${
                  user
                    ? "bg-green-900 hover:bg-green-700 text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <Edit3 size={18} /> Update Profile
              </button>
            </div>

            {/* Edit Form */}
            {isOpen &&
              user &&
              (loading ? (
                <div className="mt-4">
                  <Loading />
                </div>
              ) : (
                <form
                  onSubmit={handleUpdateForm}
                  className="mt-6 bg-gray-50 p-6 rounded-xl space-y-4"
                >
                  <h2 className="text-xl font-semibold text-green-900 text-center">
                    Edit Information
                  </h2>

                  <div>
                    <label className="font-medium">Name</label>
                    <input
                      defaultValue={user?.displayName}
                      name="name"
                      type="text"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-medium">Photo URL</label>
                    <input
                      defaultValue={user?.photoURL}
                      name="photo"
                      type="text"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-green-900 hover:bg-green-700 text-white w-full"
                  >
                    Save Changes
                  </button>
                </form>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyProfile;
