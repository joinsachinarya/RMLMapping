import React, { PropsWithChildren } from "react";
import { type FC } from "react";

interface rightMenubarProps extends PropsWithChildren {
  option?: string;
}

const RightMenubar: FC<rightMenubarProps> = (props) => {
  const { option = "Run" } = props;
  return (
    <>
      <div className="flex flex-row-reverse bg-gray-100 h-12 p-3 w-full right-menubar-container">
        {option}
      </div>
    </>
  );
};

export default RightMenubar;
