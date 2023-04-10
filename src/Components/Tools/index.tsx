import React, { FC, PropsWithChildren } from "react";
type ToolsProps = PropsWithChildren;
const Tools: FC<ToolsProps> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex border-solid border-b-2 border-gray-300 w-full h-6 bg-gray-100">
        {children}
      </div>
    </>
  );
};

export default Tools;
