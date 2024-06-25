import React, { useEffect, useRef, useState } from 'react'

const FileIndividualCompenent = ({name,color,by,date,data,icon}:{name:string,color:string,by:string,date:string,data:string,icon:string}) => {
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
    <tr>
    <td>
      <div className="d-flex align-items-center">
        <div className={`icon-small bg-${color} rounded mr-3`}>
          <i className={icon!=="" ? icon : "ri-file-excel-line"}></i>
        </div>
        <div
          data-load-file="file"
          data-load-target="#resolte-contaniner"
          data-url="../assets/vendor/doc-viewer/files/demo.pdf"
          data-toggle="modal"
          data-target="#exampleModal"
          data-title={name}
        >
          {name}
        </div>
      </div>
    </td>
    <td>{by}</td>
    <td>{date}</td>
    <td>{data}</td>
    <td>
      <div className="dropdown">
        <span
          className="dropdown-toggle cursor-pointer"
          id="dropdownMenuButton6"
          data-toggle="dropdown"
          onClick={toggleDropdown}
          ref={dropdownRef}
          
        >
          <i className="ri-more-fill"></i>
        </span>
        {showDropdown && (
             <div style={dropdownMenuStyle}
             aria-labelledby="dropdownMenuButton6"
           >
             <a className="dropdown-item" href="#">
               <i className="ri-eye-fill mr-2"></i>View
             </a>
             <a className="dropdown-item" href="#">
               <i className="ri-delete-bin-6-fill mr-2"></i>
               Delete
             </a>
             <a className="dropdown-item" href="#">
               <i className="ri-pencil-fill mr-2"></i>Edit
             </a>
             <a className="dropdown-item" href="#">
               <i className="ri-printer-fill mr-2"></i>Print
             </a>
             <a className="dropdown-item" href="#">
               <i className="ri-file-download-fill mr-2"></i>
               Download
             </a>
           </div>
        )}
       
      </div>
    </td>
  </tr>
  )
}
const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: "auto",
    right: 0,
    zIndex: 1000,
    minWidth: "7rem",
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
export default FileIndividualCompenent