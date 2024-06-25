import React, { useEffect, useRef, useState } from 'react';

const FoldersHeading = () => {
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
    <div className="card card-block card-stretch card-transparent">
      <div className="card-header d-flex justify-content-between pb-0">
        <div className="header-title">
          <h4 className="card-title">Folders</h4>
        </div>
        <div className="card-header-toolbar d-flex align-items-center">
          <div className="dropdown" ref={dropdownRef}>
            <span
              className="dropdown-toggle dropdown-bg btn bg-white"
              id="dropdownMenuButton1"
              onClick={toggleDropdown}
            >
              Name <i className="ri-arrow-down-s-line ml-1"></i>
            </span>
            {showDropdown && (
              <div className="" style={dropdownMenuStyle} aria-labelledby="dropdownMenuButton1">
                <a className="dropdown-item" href="#">
                  Last modified
                </a>
                <a className="dropdown-item" href="#">
                  Last modified by me
                </a>
                <a className="dropdown-item" href="#">
                  Last opened by me
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
 const dropdownMenuStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: "auto",
  right: 0,
  zIndex: 1000,
  minWidth: "13rem",
  padding: "0.75rem 0",
  margin: "0.5rem 0 0",
  fontSize: "1rem",
  color: "#535f6b",
  textAlign: "left",
  listStyle: "none",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.175)",
};

export default FoldersHeading;
