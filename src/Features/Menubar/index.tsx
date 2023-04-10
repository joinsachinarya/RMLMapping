import React from "react";
import { type FC } from "react";
// import { Link } from "react-router-dom";

interface MenubarProps {
  heading?: string;
}

const Menubar: FC<MenubarProps> = (props) => {
  const { heading = "Toolbar/Menubar" } = props;
  return (
    <>
      <div className="flex bg-gray-100 h-12 p-3">
        <div className="flex justify-between">
          <img
            src={"https://picsum.photos/20"}
            alt="logo"
            className="rounded-full mr-1"
          />
          {heading}
        </div>
      </div>
    </>
  );
};

export default Menubar;
