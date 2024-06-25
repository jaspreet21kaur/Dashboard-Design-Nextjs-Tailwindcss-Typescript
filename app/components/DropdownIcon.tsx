import React, { useEffect, useRef, useState } from 'react';

const DropdownIcon = () => {
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

  const dropdownIconStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownInfoStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    fontSize: '23px',
    textAlign: 'center',
    paddingBottom: '0',
    background: '#fff',
    position: 'relative',
    borderRadius: '8px',
    transition: 'opacity 0.3s ease-in-out',
    boxShadow: '0 0px 40px 0 rgba(0, 0, 0, 0.05)',
  };

  const dropdownMenuStyle: React.CSSProperties = {
    opacity: showDropdown ? 1 : 0,
    position: 'absolute',
    right: 0,
    width: '50px',
    padding: '15px 4px',
    zIndex: 9,
    background: '#fff',
    color: '#01041b',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 0px 40px 0 rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="flex align-items-center" style={dropdownIconStyle}>
      <div className="cursor-pointer"  ref={dropdownRef} style={dropdownInfoStyle} onClick={toggleDropdown}>
        <a  className="" data-toggle="collapse" aria-expanded="false"
       >
          <i className="ri-arrow-down-s-line"></i>
        </a>
        {showDropdown && (
          <ul className="m-0 p-0 mt-2" style={dropdownMenuStyle}>
          <li className="mb-2">
            <a href="#" data-toggle="tooltip" data-placement="right" title="Calendar">
              <i className="las la-calendar iq-arrow-left"></i>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" data-toggle="tooltip" data-placement="right" title="Keep">
              <i className="las la-lightbulb iq-arrow-left"></i>
            </a>
          </li>
          <li>
            <a href="#" data-toggle="tooltip" data-placement="right" title="Tasks">
              <i className="las la-tasks iq-arrow-left"></i>
            </a>
          </li>
        </ul>
        )}
        
      </div>
    </div>
  );
};

export default DropdownIcon;
