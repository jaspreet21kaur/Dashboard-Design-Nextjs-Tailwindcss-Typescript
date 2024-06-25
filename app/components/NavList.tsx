import React, { useState } from 'react';
import SubNavOtherPageList from './SubNavOtherPageList';

const NavList = () => {
  const [showMyDriveDropdown, setShowMyDriveDropdown] = useState(false);

  const toggleMyDriveDropdown = () => {
    setShowMyDriveDropdown(!showMyDriveDropdown);
  };

  return (
    <nav className="iq-sidebar-menu">
      <ul id="iq-sidebar-toggle" className="iq-menu">
        <li className="active">
          <a href="../backend/index.html" className="">
            <i className="las la-home iq-arrow-left"></i><span>Dashboard</span>
          </a>
          <ul id="dashboard" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle"></ul>
        </li>
        <li className={showMyDriveDropdown ? "active" : ""}>
          <a className="cursor-pointer" onClick={toggleMyDriveDropdown} aria-expanded={showMyDriveDropdown}>
            <i className="las la-hdd"></i><span>My Drive</span>
           {showMyDriveDropdown ? <i className="las la-angle-down iq-arrow-right arrow-hover"></i> : <i className="las la-angle-right iq-arrow-right arrow-active"></i>}
          </a>
          {showMyDriveDropdown && (
            <ul id="mydrive" className=" show" data-parent="#iq-sidebar-toggle">
              <li className="">
                <a href="../backend/page-alexa.html">
                  <i className="lab la-blogger-b"></i><span>Alexa Workshop</span>
                </a>
              </li>
              <li className="">
                <a href="../backend/page-android.html">
                  <i className="las la-share-alt"></i><span>Android</span>
                </a>
              </li>
              <li className="">
                <a href="../backend/page-brightspot.html">
                  <i className="las la-icons"></i><span>Brightspot</span>
                </a>
              </li>
              <li className="">
                <a href="../backend/page-ionic.html">
                  <i className="las la-icons"></i><span>Ionic Chat App</span>
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="">
          <a href="../backend/page-files.html" className="">
            <i className="lar la-file-alt iq-arrow-left"></i><span>Files</span>
          </a>
          <ul id="page-files" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle"></ul>
        </li>
        <li className="">
          <a href="../backend/page-folders.html" className="">
            <i className="las la-stopwatch iq-arrow-left"></i><span>Recent</span>
          </a>
          <ul id="page-folders" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle"></ul>
        </li>
        <li className="">
          <a href="../backend/page-favourite.html" className="">
            <i className="lar la-star"></i><span>Favourite</span>
          </a>
          <ul id="page-fevourite" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle"></ul>
        </li>
        <li className="">
          <a href="../backend/page-delete.html" className="">
            <i className="las la-trash-alt iq-arrow-left"></i><span>Trash</span>
          </a>
          <ul id="page-delete" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle"></ul>
        </li>
        <SubNavOtherPageList />
      </ul>
    </nav>
  );
};

export default NavList;
