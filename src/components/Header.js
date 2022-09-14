import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TbCapture } from "react-icons/tb";
import PopupMenu from "./PopupMenu";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="py-3 sticky w-full top-0 left-0 bg-white z-50 text-gray-600 font-[500]">
      <div className="flex items-center pl-5 pr-5">
        <div className="font-bold text-[18px]">LOGO</div>

        <div style={{ width: "18px" }}></div>

        <div className="flex-grow">
          <div className="flex items-center px-3 bg-gray-200 rounded-full text-gray-600">
            <FiSearch className="text-[21px] cursor-pointer" />
            <div className="flex-grow">
              <input
                placeholder="Search free high-resolution photos"
                className="outline-none py-2 bg-transparent px-2 w-full"
                type="text"
              />
            </div>
            <TbCapture className="text-[24px] cursor-pointer" />
          </div>
        </div>

        <div className="nav_menu">
          <ul className="flex items-center pl-[20px] pr-[20px]">
            <li>
              <Link className="px-[12px] flex text-[15px]" to="/explore">
                Explore
              </Link>
            </li>
            <li>
              <Link className="px-[12px] flex text-[15px]" to="/advertise">
                Advertise
              </Link>
            </li>
            <li>
              <Link className="px-[12px] flex text-[15px]" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav_line nav_menu"></div>
        <div className="nav_menu" style={{ width: "21px" }}></div>

        <div className="flex items-center nav_menu">
          <Link
            className="text-[15px] px-[11px] flex whitespace-nowrap"
            to="/login"
          >
            Log in
          </Link>{" "}
          {" /"}
          <Link
            className="text-[15px] px-[11px] flex whitespace-nowrap"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        <div className="nav_menu" style={{ width: "8px" }}></div>

        <button className="border border-gray-200 text-[15px] px-[11px] whitespace-nowrap py-1 nav_menu">
          Submit a photo
        </button>

        <div style={{ width: "12px" }}></div>

        <div>
          <AiOutlineMenu
            onClick={() => setShowPopup(true)}
            className="text-[20px] cursor-pointer"
          />
        </div>

        {showPopup && <PopupMenu menuRef={menuRef} />}
      </div>
    </div>
  );
};

export default Header;
