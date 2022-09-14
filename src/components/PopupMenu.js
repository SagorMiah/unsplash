import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GrCloudComputer } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { TbLanguage } from "react-icons/tb";

const PopupMenu = ({ menuRef }) => {
  const [screenSize, setScreenSize] = useState(1280);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  console.log(screenSize);
  return (
    <div
      ref={menuRef}
      className="absolute bg-white right-6 top-[60px] z-[999999] border border-gray-500 rounded-md submenu_wrap"
    >
      <div className="flex p-[40px] popup_menu">
        <div className="min-w-[180px] popup_menu_single">
          <div className="flex items-center mb-3 justify-between">
            <div className="flex items-center">
              <GrCloudComputer className="text-[22px] mr-3" />
              <h4 className="font-semibold text-black terms_title_class">
                Company
              </h4>
            </div>
            <IoIosArrowDown className="not_show" />
          </div>
          <ul className="menu_list_ul">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">History</Link>
            </li>
            <li>
              <Link to="/about">Join the team</Link>
            </li>
            <li>
              <Link to="/about">Press</Link>
            </li>
            <li>
              <Link to="/about">Contact us</Link>
            </li>
            <li>
              <Link to="/about">Help center</Link>
            </li>
          </ul>
        </div>
        <div className="min-w-[180px] popup_menu_single">
          <div className="flex items-center mb-3 justify-between">
            <div className="flex items-center">
              <MdProductionQuantityLimits className="text-[25px] mr-3" />
              <h4 className="font-semibold text-black terms_title_class">
                Product
              </h4>
            </div>
            <IoIosArrowDown className="not_show" />
          </div>
          <ul className="menu_list_ul">
            <li>
              <Link to="/about">Developers/API</Link>
            </li>
            <li>
              <Link to="/about">Unsplash Dataset</Link>
            </li>
            <li>
              <Link to="/about">Unsplash for iOS</Link>
            </li>
            <li>
              <Link to="/about">Apps & Plugins</Link>
            </li>
          </ul>
        </div>
        <div className="min-w-[180px] popup_menu_single">
          <div className="flex items-center mb-3 justify-between">
            <div className="flex items-center">
              <AiOutlineUsergroupAdd className="text-[25px] mr-3" />
              <h4 className="font-semibold text-black terms_title_class">
                Community
              </h4>
            </div>
            <IoIosArrowDown className="not_show" />
          </div>
          <ul className="menu_list_ul">
            <li>
              <Link to="/about">Become a Contributor</Link>
            </li>
            <li>
              <Link to="/about">Topic</Link>
            </li>
            <li>
              <Link to="/about">Collections</Link>
            </li>
            <li>
              <Link to="/about">Trends</Link>
            </li>
            <li>
              <Link to="/about">Unsplash Awards</Link>
            </li>
            <li>
              <Link to="/about">Stats</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="popup_menu_single">
        <div className="flex items-center justify-between px-6 border-t border-t-gray-400 terms_menu_class">
          <div>
            <div className="flex items-center px-5 not_show justify-between bottom_class">
              <div className="flex items-center">
                <FiBookOpen className="text-[25px] mr-3 " />
                <h4 className="font-semibold text-black terms_title_class">
                  Legal
                </h4>
              </div>
              <IoIosArrowDown />
            </div>
            <div className="terms_menu_wrapper">
              <ul className="flex terms">
                <li>
                  <a href="#">License</a>
                </li>
                <li>
                  <a href="#">Privacy Plicy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${screenSize > 768 ? "flex" : ""} px-5`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TbLanguage className="text-[25px] mr-3" />
                <h4 className="font-semibold text-black hidden terms_title_class">
                  Language
                </h4>
              </div>
              <IoIosArrowDown className="not_show" />
            </div>
            <div className="language_list">
              <span className="block text-[14px] cursor-pointer">English</span>
            </div>
          </div>
        </div>
      </div>

      <div className="not_show border-t border-t-gray-400 p-5 flex flex-col">
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 text-[14px] whitespace-nowrap">
            Submit a photo
          </button>
          <button className="px-3 py-1 border border-gray-300 text-[14px] whitespace-nowrap">
            Log in
          </button>
        </div>
        <p className="text-[14px] pt-3 text-center">
          New to Unsplash?{" "}
          <a className="underline" href="#">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default PopupMenu;
