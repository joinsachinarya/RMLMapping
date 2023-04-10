import React from "react";
import Header from "../Header";
import { type FC, type PropsWithChildren } from "react";

interface PageTemplateProps extends PropsWithChildren {
  isHeader?: boolean;
}

const PageTemplate: FC<PageTemplateProps> = (props) => {
  const { children, isHeader = true } = props;
  return (
    <div>
      {isHeader ? <Header /> : null}
      {children}
    </div>
  );
};

export default PageTemplate;
