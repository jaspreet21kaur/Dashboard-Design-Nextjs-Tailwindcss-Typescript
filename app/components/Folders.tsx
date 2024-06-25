import React, { useEffect, useRef, useState } from 'react'

const Folders = ({name,color,date,file}:{name:string,color:string,date:string,file:string}) => {
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
    <div className="col-md-6 col-sm-6 col-lg-3">
    <div className="card card-block card-stretch card-height">
    <div className="card-body">                            
            <div className="d-flex justify-content-between">
                <a href="./page-alexa.html" className="folder">
                    <div className={`icon-small bg-${color} rounded mb-4`}>
                        <i className="ri-file-copy-line"></i>
                    </div>
                </a>
                <div className="card-header-toolbar">
                    <div className="dropdown">
                        <span onClick={toggleDropdown} ref={dropdownRef} className="cursor-pointer" id="dropdownMenuButton2" data-toggle="dropdown">
                            <i className="ri-more-2-fill"></i>
                        </span>
                        {showDropdown && (
                            <div className="" style={dropdownMenuStyle} aria-labelledby="dropdownMenuButton2">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                        </div>
                        )}
                       
                    </div>
                </div>
            </div>
            <a href="./page-alexa.html" className="folder">
                <h5 className="mb-2">{name}</h5>
                <p className="mb-2"><i className="lar la-clock text-danger mr-2 font-size-20"></i> {date}</p>
                <p className="mb-0"><i className="las la-file-alt text-danger mr-2 font-size-20"></i> {file}</p>
            </a>
    </div>
</div>
</div>
  )
}
const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: "auto",
    right: 0,
    zIndex: 1000,
    minWidth: "6rem",
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
export default Folders