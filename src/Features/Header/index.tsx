import React from "react";
import { type FC } from "react";
import LeftMenubar from "../LeftMenubar";
import RightMenubar from "../RightMenubar";

interface HeaderProps {
  isLeftMenubar?: boolean;
  isRightMenubar?: boolean;
}
const handleClick = () => {
  window.location.href = "/";
};

const Header: FC<HeaderProps> = (props) => {
  const { isLeftMenubar = true, isRightMenubar = true } = props;

  return (
    <div className="flex h-12 justify-between page-template-container">
      {isLeftMenubar ? <LeftMenubar /> : null}
      <button
        className="flex justify-center items-center bg-gray-100 w-full header-container"
        onClick={handleClick}
      >
        <img
          src={"https://picsum.photos/20"}
          alt="logo"
          className="rounded mr-2"
        />
        <span>{"Comake"}</span>
      </button>
      {isRightMenubar ? <RightMenubar /> : null}
    </div>
  );
};

export default Header;
