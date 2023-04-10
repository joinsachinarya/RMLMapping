import React from "react";
import { type FC } from "react";

interface rightMenubarProps {
  option?: string;
}

const RightMenubar: FC<rightMenubarProps> = (props) => {
  const { option } = props;
  return (
    <>
      <div className="flex flex-row-reverse bg-gray-100 h-12 p-3 w-full right-menubar-container">
        <div className="ml-4">
          <button type="button" onClick={() => console.log("Running...")}>
            Run
          </button>
        </div>
        <div className="ml-4">
          <button type="button" onClick={() => console.log("Open settings...")}>
            Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default RightMenubar;
