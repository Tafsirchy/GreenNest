import React, { useContext } from "react";
import logo from "../assets/nest-home.png";
import { Link, NavLink } from "react-router";
import { UserIcon } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("User Logged Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const NavActiveStyle = ({ isActive }) =>
    isActive ? "bg-cyan-800 text-white" : "";

  return (
    <nav className="bg-[#F0E49180]">
      <div className="navbar w-11/12 mx-auto px-0">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
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
            className="flex justify-center items-center font-bold gap-1 btn-ghost text-2xl"
          >
            <img className="w-12 h-12 mr-0" src={logo} alt="" />
            <span className="text-xl pl-1">GreenNest</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
          <div className="p-2 rounded-full border">
            <UserIcon />
          </div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="font-bold btn btn-secondary px-8"
            >
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="font-bold btn btn-secondary px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
