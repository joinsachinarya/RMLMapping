/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FC } from "react";

interface LeftMenubarProps {
  option?: string;
}

const LeftMenubar: FC<LeftMenubarProps> = (props) => {
  const { option } = props;
  const [openMenu, setOpenMenu] = useState({
    file: false,
    edit: false,
    mapping: false,
    view: false,
  });

  const toggleMenu = (menu: any) => {
    setOpenMenu((prevOpenMenu: any) => {
      const newMenuState: any = {};
      Object.keys(prevOpenMenu).forEach((key) => {
        newMenuState[key] = false;
      });
      newMenuState[menu] = !prevOpenMenu[menu];
      return newMenuState;
    });
  };

  return (
    <>
      <div className="flex bg-gray-100 h-12 p-3 w-full left-menubar-container">
        <div className="mr-4 z-10">
          <button onClick={() => toggleMenu("file")}>File</button>
          {openMenu.file && (
            <ul className="p-4 bg-gray-50">
              <li>
                <button>New</button>
              </li>
              <li>
                <button>Open</button>
              </li>
              <li>
                <button>Export</button>
              </li>
            </ul>
          )}
        </div>
        <div className="mr-4 z-10">
          <button onClick={() => toggleMenu("edit")}>Edit</button>
          {openMenu.edit && (
            <ul className="p-4 bg-gray-50">
              <li>
                <button>New Entity</button>
              </li>
              <li>
                <button>New Attribute</button>
              </li>
              <li>
                <button>Delete All</button>
              </li>
              <li>
                <button>Auto Save</button>
              </li>
              <li>
                <button>Save</button>
              </li>
            </ul>
          )}
        </div>
        <div className="mr-4 z-10">
          <button onClick={() => toggleMenu("mapping")}>Mapping</button>
          {openMenu.mapping && (
            <ul className="p-4 bg-gray-50">
              <li>
                <button>Run</button>
              </li>
              <li>
                <button>Namespaces</button>
              </li>
              <li>
                <button>Generate from example</button>
              </li>
              <li>
                <button>Generate from ontology</button>
              </li>
            </ul>
          )}
        </div>
        <div className="mr-4 z-10">
          <button onClick={() => toggleMenu("view")}>View</button>
          {openMenu.view && (
            <ul className="p-4 bg-gray-50">
              <li>
                <button>Show Input</button>
              </li>
              <li>
                <button>Show Modeling Panel</button>
              </li>
              <li>
                <button>Show Result</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default LeftMenubar;
