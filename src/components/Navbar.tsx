import "./Navbar.css";

import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FaTwitter } from "react-icons/fa";
import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-white shadow-md h-16">
      <div className="container flex px-4 h-full max-w-6xl mx-auto bg-white">
        <a href="/" className="mr-auto py-1 h-full">
          <img src="/brand_logo.svg" className="w-[32px] h-full py-2" />
        </a>
        <div className="flex ml-auto nav-link  text-gray-700">
          <a href="#">
            <AiFillYoutube />
          </a>
          <a href="#">
            <AiOutlineWhatsApp />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
