import React, { useEffect, useRef, useState } from 'react'

const Settings = () => {
    const [settings,setsettings]=useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const ToggleSettings=()=>{
        setsettings(!settings)
       }
       useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setsettings(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <li className="nav-item nav-icon "> 
    <a  onClick={ToggleSettings} className="cursor-pointer" id="dropdownMenuButton02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    <i className="ri-settings-3-line"></i>
    </a>
    <div ref={dropdownRef} className={settings ? "iq-sub-dropdown show dropdown-menu" : "hidden"} aria-labelledby="dropdownMenuButton02">
        <div className="card shadow-none m-0">
            <div className="card-body p-0 ">
                <div className="p-3">
                    <a href="#" className="iq-sub-card pt-0"><i className="ri-settings-3-line"></i> Settings</a>
                    <a href="#" className="iq-sub-card"><i className="ri-hard-drive-line"></i> Get Drive for desktop</a>
                    <a href="#" className="iq-sub-card"><i className="ri-keyboard-line"></i> Keyboard Shortcuts</a>
                </div>                                
            </div>
        </div>
    </div>
</li>
  )
}

export default Settings