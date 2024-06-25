import React from "react";

const DropdownCreate = () => {
  return (
    <ul className="z-40 " style={dropdownMenuStyle}>
    <li>
      <div className="item" style={menuItemStyle}>
        <i className="ri-folder-add-line pr-3" style={iconStyle}></i>New Folder
      </div>
    </li>
    <li>
      <div className="item" style={menuItemStyle}>
        <i className="ri-file-upload-line pr-3" style={iconStyle}></i>Upload Files
      </div>
    </li>
    <li>
      <div className="item" style={menuItemStyle}>
        <i className="ri-folder-upload-line pr-3" style={iconStyle}></i>Upload Folders
      </div>
    </li>
  </ul>
  );
};

const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1000,
    float: "left",
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
  
  const menuItemStyle = {
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };
  
  const iconStyle = {
    marginRight: "0.25rem",
  };
  

export default DropdownCreate;
