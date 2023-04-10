import React from "react";
import Menubar from "../Menubar";
import { type FC, type PropsWithChildren } from "react";

interface PageTemplateProps extends PropsWithChildren {
  isMenubar?: boolean;
}

const PageTemplate: FC<PageTemplateProps> = (props) => {
  const { children, isMenubar = true } = props;
  return (
    <div>
      {isMenubar ? <Menubar /> : null}
      {children}
    </div>
  );
};

export default PageTemplate;
