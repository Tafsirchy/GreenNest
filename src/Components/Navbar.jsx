import React, { useContext } from "react";
import logo from "../assets/nest-home.png";
import { Link, NavLink } from "react-router";
import { UserIcon } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("User Logged Out"))
      .catch((error) => console.error(error));
  };

  const NavActiveStyle = ({ isActive }) =>
    isActive ? "bg-[#A3B18A] text-white font-semibold" : "";

  return (
    <nav className="bg-[#043915] shadow-md font-sans">
      <div className="navbar w-11/12 mx-auto px-0">
        <div className="navbar-start text-white">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FAF5EF] rounded-box z-10 mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <NavLink className={NavActiveStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={NavActiveStyle} to="/plants">
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink className={NavActiveStyle} to="/profile">
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex justify-center items-center gap-1 btn-ghost text-2xl text-white"
          >
            <img className="w-12 h-12 mr-0" src={logo} alt="GreenNest Logo" />
            <span className="text-xl pl-1 text-[#2F4F2F] font-semibold text-white">
              GreenNest
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <NavLink className={NavActiveStyle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={NavActiveStyle} to="/plants">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink className={NavActiveStyle} to="/profile">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          <div className="p-2 rounded-full border border-[#D9E4D2]">
            <UserIcon className="text-white" />
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="font-bold btn bg-[#A3B18A] text-[#F5F0E1] px-8 hover:bg-white hover:text-[#043915]"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="font-bold btn bg-[#A3B18A] text-[#F5F0E1] px-8 hover:bg-white hover:text-[#043915]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
