import React from "react";
import { type FC, type PropsWithChildren } from "react";
import Header from "../Header";

type PageTemplateProps = PropsWithChildren;

const PageTemplate: FC<PageTemplateProps> = (props) => {
  const { children } = props;
  return (
    <div className="page-template-container">
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate;
