"use client"
import React, { useEffect, useRef, useState } from 'react'
import DropdownCreate from './DropdownCreate';
import NavList from './NavList';
import StorageProgress from './ProgressBar';

const SideNavBar: React.FC<{ show: boolean }> = ({ show }) =>{
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <>
    {show ? 
    <div className="sidebar-main opacity-100  z-[100]  h-[400%] fixed bg-white">
          <div className=" iq-sidebar-logo   d-flex align-items-center justify-content-between">
              <a href="index.html" className="header-logo">
                  <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
               </a>
              <div className="iq-menu-bt-sidebar ">
                  <i  className="las la-bars wrapper-menu"></i>
              </div>
          </div>
          <div className="data-scrollbar " data-scroll="1">
              <div className="new-create select-dropdown  input-prepend input-append">
                  <div ref={dropdownRef} onClick={toggleDropdown} className="btn-group  cursor-pointer">
                      <div data-toggle="dropdown" >
                      <div className="search-query selet-caption"><i className=" las la-plus pr-2"></i>Create New</div><span className="search-replace"></span>
                      <span className="caret"></span>
                      </div>
                      {showDropdown && <DropdownCreate/>}
                  </div>
              </div>
              <NavList/>
             <StorageProgress/>
              <div className="p-3"></div>
          </div>
    </div> 
     :
    
    <div className="iq-sidebar overflow-scroll   sidebar-default ">
          <div className="iq-sidebar-logo   d-flex align-items-center justify-content-between">
              <a href="index.html" className="header-logo">
                  <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
               </a>
              <div className="iq-menu-bt-sidebar ">
                  <i className="las la-bars wrapper-menu"></i>
              </div>
          </div>
          <div className="data-scrollbar " data-scroll="1">
              <div className="new-create select-dropdown input-prepend input-append">
                  <div ref={dropdownRef} onClick={toggleDropdown} className="btn-group  cursor-pointer">
                      <div data-toggle="dropdown" >
                      <div className="search-query selet-caption"><i className=" las la-plus pr-2"></i>Create New</div><span className="search-replace"></span>
                      <span className="caret"></span>
                      </div>
                      {showDropdown && <DropdownCreate/>}
                  </div>
              </div>
              <NavList/>
             <StorageProgress/>
              <div className="p-3"></div>
          </div>
    </div> 
    }
    </>
  )
}

export default SideNavBar