import React, { PropsWithChildren } from "react";
import { type FC } from "react";

interface LeftMenubarProps extends PropsWithChildren {
  option?: string;
}

const LeftMenubar: FC<LeftMenubarProps> = (props) => {
  const { option = "Upload" } = props;
  return (
    <>
      <div className="flex bg-gray-100 h-12 p-3 w-full left-menubar-container">
        {option}
      </div>
    </>
  );
};

export default LeftMenubar;
