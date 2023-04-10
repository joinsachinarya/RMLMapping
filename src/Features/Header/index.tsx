import React from "react";
import { type FC } from "react";
// import { Link } from "react-router-dom";

interface HeaderProps {
  heading?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { heading = "Toolbar/Menubar" } = props;
  return (
    <>
      <div className="flex border-solid border-x-2 border-t-2 border-gray-300 bg-gray-100 h-12 p-3">
        <div className="flex justify-between">
          <img src={"https://picsum.photos/20"} alt="logo" />
          {heading}
        </div>
      </div>
    </>
  );
};

export default Header;
