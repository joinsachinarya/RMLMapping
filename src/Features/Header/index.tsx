import React from "react";
import { type FC } from "react";
import LeftMenubar from "../LeftMenubar";
import RightMenubar from "../RightMenubar";

interface HeaderProps {
  isLeftMenubar?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="flex page-template-container justify-between">
      <LeftMenubar />
      <div className="flex justify-center items-center bg-gray-100 w-full header-container">
        <img
          src={"https://picsum.photos/20"}
          alt="logo"
          className="rounded mr-2"
        />
        <span>{"Comake"}</span>
      </div>
      <RightMenubar />
    </div>
  );
};

export default Header;
