import React, { useCallback } from "react";
import { menu, search } from "../assets";
import { usePrivy } from "@privy-io/react-auth";
import CustomButton from "./CustomButton";
import { IconHeartHandshake } from "@tabler/icons-react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
navlinks;

const Navbar = () => {
  const { ready, authenticated, login, user, logout } = usePrivy();
  const [active, setActive] = useState("dashboard");
  console.log("user", user);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const navigate = useNavigate();
  const handleLoginLogout = useCallback(() => {
    // if user is authenticated, log them out
    if (authenticated) {
      logout();
    }

    // if user is not authenticated, log them in
    else {
      // login is a promise
      login().then(() => {
        if (user) {
          console.log(user);
          //fetch user data
        }
      });
    }
  }, [authenticated, login, logout, user]);
  return (
    <div className=" mb-[35px] flex flex-col-reverse justify-between md:flex-row gap-6 ">
      {/* searchbar */}
      <div className=" flex h-[52px] max-w-[458px] flex-row rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="flex  w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />
        <div className=" flex h-full w-[72px] cursor-pointer items-center justify-center rounded-xl bg-[#4acd8d]">
          <img src={search} alt="search" className="h-5 w-5 object-contain " />
        </div>
      </div>

      {/* login and logout */}
      <div className=" hidden flex-row justify-end gap-2 sm:flex ">
        <CustomButton
          btnType="button"
          title={authenticated ? "Log Out" : "Log In"}
          styles={authenticated ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={handleLoginLogout}
        />
      </div>
      <div className=" relative flex items-center justify-between sm:hidden ">
        <div className=" flex h-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#2c2f32] ">
          <IconHeartHandshake size={24} color="#1ec070" className="p-2 " />
          <img
            src={menu}
            alt=" menu"
            className=" h-[32px] w-[32px] cursor-pointer object-contain"
            onClick={() => {
              setToggleSidebar(!toggleSidebar);
            }} // toggling the sidebar.
          />
          <div
            className={`absolute left-0 right-0 top-[80px] bg-[#1c1c24] py-4 shadow-secondary
               
               ${!toggleSidebar ? "-translate-y-[100vh]" : "translate-y-0"} transition-all duration-700
                `}
          >
            <ul className=" mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${active === link.name && "bg-[#3a3a43]"}`}
                  onClick={() => {
                    setActive(link.name);
                    setToggleSidebar(false);
                    navigate(link.link);
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
