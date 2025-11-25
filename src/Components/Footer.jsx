import React from "react";
import logo from "../assets/nest-home.png";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#043915] text-white ">
      <div className="footer sm:footer-horizontal p-10 w-11/12 mx-auto ">
        <aside>
          <img className="w-20 h-20" src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="gap-3">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav className="gap-3">
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav className="gap-3">
          <h6 className="footer-title">Social Media Icons</h6>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaInstagram></FaInstagram> Instagram
          </a>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaPinterest></FaPinterest> Pinterest
          </a>
        </nav>
      </div>
      <div className="text-center text-gray-400 border-1 p-4">
        <p>© 2025 GreenNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
