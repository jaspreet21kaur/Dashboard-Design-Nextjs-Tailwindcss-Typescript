"use client";
import React, { useEffect, useRef, useState } from "react";
import WelcomePenny from "./WelcomePenny";
import QuickAccess from "./QuickAccess";
import Document from "./Document";
import Folders from "./Folders";
import StaticsChart from "./staticsChart";
import Storage from "./Storage";
import UpgradePlan from "./UpgradePlan";
import DropdownIcon from "./DropdownIcon";
import DropdownCreate from "./DropdownCreate";
import FoldersHeading from "./FoldersHeading";
import FilesComponent from "./files";

const Content = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="content-page  ">
      <div className="container-fluid mt-[38px] lg:mt-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-transparent   card-block card-stretch card-height mb-3">
              <div className="d-flex justify-content-between">
                <div className="select-dropdown input-prepend input-append">
                  <div
                    ref={dropdownRef}
                    onClick={toggleDropdown}
                    className="btn-group relative cursor-pointer"
                  >
                    <div data-toggle="dropdown">
                      <div className="dropdown-toggle search-query">
                        My Drive<i className="las la-angle-down ml-3"></i>
                      </div>
                      <span className="search-replace"></span>
                      <span className="caret"></span>
                    </div>
                    {showDropdown && <DropdownCreate />}
                  </div>
                </div>
                <DropdownIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <WelcomePenny />
          </div>
          <div className="col-lg-4">
            <QuickAccess />
          </div>
          <div className="col-lg-12">
            <div className="card card-block card-stretch card-transparent ">
              <div className="card-header d-flex justify-content-between pb-0">
                <div className="header-title">
                  <h4 className="card-title">Documents</h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <a href="./page-folders.html" className=" view-more">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Document
            name={"Terms.pdf"}
            image={"pdf"}
          />
          <Document
            name={"New-one.docx"}
            image={"doc"}
          />
          <Document
            name={"Woo-box.xlsx"}
            image={"xlsx"}
          />
          <Document
            name={"IOS-content.pptx"}
            image={"ppt"}
          />

          <div className="col-lg-12">
            <FoldersHeading />
          </div>

          <Folders
            name={"Alexa Workshop"}
            color={"danger"}
            date={"10 Dec, 2020"}
            file={"08 Files"}
          />
          <Folders
            name={"Android"}
            color={"primary"}
            date={"09 Dec, 2020"}
            file={"08 Files"}
          />
          <Folders
            name={"Brightspot"}
            color={"info"}
            date={"07 Dec, 2020"}
            file={"08 Files"}
          />
          <Folders
            name={"Ionic Chat App"}
            color={"success"}
            date={"06 Dec, 2020"}
            file={"08 Files"}
          />
          <FilesComponent />
          <StaticsChart />
          <UpgradePlan />
          <Storage />
        </div>
      </div>
    </div>
  );
};

export default Content;
