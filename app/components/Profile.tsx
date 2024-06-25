import React, { useEffect, useRef, useState } from 'react'

 const Profile = () => {
    const [showProfile, setShowProfile] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <li className="nav-item nav-icon  caption-content">
    <a onClick={toggleProfile} className=" relative cursor-pointer" id="dropdownMenuButton03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        <div className="caption bg-primary line-height">P</div>
    </a>
    <div ref={dropdownRef} className={showProfile ? "show iq-sub-dropdown dropdown-menu" : "hidden"}  aria-labelledby="dropdownMenuButton03">
        <div className="card mb-0">
            <div className="card-header d-flex justify-content-between align-items-center mb-0">
            <div className="header-title">
                <h4 className="card-title mb-0">Profile</h4>
            </div>
            <div onClick={toggleProfile} className="close-data text-right badge badge-primary cursor-pointer "><i  className="ri-close-fill"></i></div>
            </div>
            <div className="card-body">
                <div className="profile-header">
                    <div className="cover-container text-center">
                        <div className="rounded-circle  profile-icon bg-primary mx-auto d-block">
                            P                                                    
                            
                        </div>
                        <div className="profile-detail mt-3">
                        <h5><a href="../app/user-profile-edit.html">Panny Marco</a></h5>
                        <p>pannymarco@gmail.com</p>
                        </div>
                        <a href="auth-sign-in.html" className="btn btn-primary">Sign Out</a>
                    </div>
                    <div className="profile-details mt-4 pt-4 border-top">
                        <div className="media align-items-center mb-3">
                            <div className="rounded-circle iq-card-icon-small bg-primary">
                                A
                            </div>
                            <div className="media-body ml-3">
                                <div className="media justify-content-between">
                                    <h6 className="mb-0">Anna Mull</h6>
                                    <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                </div>
                                <p className="mb-0 font-size-12">annamull@gmail.com</p>
                            </div>                                                 
                        </div>
                        <div className="media align-items-center mb-3">
                            <div className="rounded-circle iq-card-icon-small bg-success">
                                K
                            </div>
                            <div className="media-body ml-3">
                                <div className="media justify-content-between">
                                    <h6 className="mb-0">King Poilin</h6>
                                    <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                </div>
                                <p className="mb-0 font-size-12">kingpoilin@gmail.com</p>
                            </div>
                        </div>
                        <div className="media align-items-center">
                            <div className="rounded-circle iq-card-icon-small bg-danger">
                                D
                            </div>
                            <div className="media-body ml-3">
                                <div className="media justify-content-between">
                                    <h6 className="mb-0">Devid Worner</h6>
                                    <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                </div>
                                <p className="mb-0 font-size-12">devidworner@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>
  )
}
const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    right: 0,
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

  export default Profile
