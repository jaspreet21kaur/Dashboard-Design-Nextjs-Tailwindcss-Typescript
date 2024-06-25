import React, { useEffect, useRef, useState } from 'react'

const HelpNaVComp = () => {
    const [help,sethelp]=useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const Togglehelp=()=>{
        sethelp(!help)
       }
       useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                sethelp(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <li className="nav-item nav-icon dropdown">
    <a onClick={Togglehelp} className="cursor-pointer" id="dropdownMenuButton01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i className="ri-question-line"></i>
    </a>
    <div ref={dropdownRef} className={help ? "iq-sub-dropdown show dropdown-menu" : "hidden"} aria-labelledby="dropdownMenuButton01">
        <div className="card shadow-none m-0">
            <div className="card-body p-0 ">
                <div className="p-3">
                    <a href="#" className="iq-sub-card pt-0"><i className="ri-questionnaire-line"></i>Help</a>
                    <a href="#" className="iq-sub-card"><i className="ri-recycle-line"></i>Training</a>
                    <a href="#" className="iq-sub-card"><i className="ri-refresh-line"></i>Updates</a>
                    <a href="#" className="iq-sub-card"><i className="ri-service-line"></i>Terms and Policy</a>
                    <a href="#" className="iq-sub-card"><i className="ri-feedback-line"></i>Send Feedback</a>
                </div>
            </div>
        </div>
    </div>
</li>
  )
}

export default HelpNaVComp