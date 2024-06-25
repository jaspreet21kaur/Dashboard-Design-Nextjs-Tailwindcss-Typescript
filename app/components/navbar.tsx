import React, { useEffect, useRef, useState } from 'react'
import SideNavBar from './sideNavbar'
import Profile from './Profile'
import Settings from './Settings'
import HelpNaVComp from './HelpNaVComp'


const TopNavbar = () => {
    const [show,setshow]=useState(false)
    const [showSideBar, setShowSideBar] = useState(false);
    const [search,setsearch]=useState(false)
    const [icons,setshowicons]=useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownNavBarRef = useRef<HTMLDivElement>(null);
    const toggeleSearch=()=>{
        setsearch(!search)
    }
    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };
   const HanldesubMenu=()=>{
    setshowicons(!icons)
     
   }

   const showList=()=>{
    setshow(!show)
   }
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setshow(false);
            setsearch(false)
            
        }
    };
    const handleClickOutsideNavbar = (event: MouseEvent) => {
        if (
            dropdownNavBarRef.current &&
            !dropdownNavBarRef.current.contains(event.target as Node) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setShowSideBar(false);
        }
    };
     
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideNavbar);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousedown", handleClickOutsideNavbar);
    };
}, []);
  return (
    <>
    <div className="iq-top-navbar  relative">
    <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="iq-navbar-logo flex align-items-center justify-content-between">
            <i onClick={toggleSideBar} className="ri-menu-line wrapper-menu relative"></i>
            <a href="index.html" className="header-logo">
                <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
                <img src="../assets/images/logo-white.png" className="img-fluid rounded-normal darkmode-logo" alt="logo"/>
            </a>
        </div>
            
            <div className="iq-search-bar device-search">      
                <form>
                    <div className="input-prepend  input-append">
                        <div  ref={dropdownRef}  className="btn-group">
                            <label className="dropdown-toggle searchbox" data-toggle="dropdown">
                            <input  onClick={showList} className="text search-input" type="text"  placeholder="Type here to search..."/><span className="search-replace cursor-pointer"></span>
                            <a className="search-link " href="#"><i className="  ri-search-line cursor-pointer"></i></a>
                            <span className="caret cursor-pointer "></span>
                            </label>
                            <ul  className={show?"dropdown-menu show" :"hidden"}>
                                <li><a href="#"><div className="item"><i className="far fa-file-pdf bg-info"></i>PDFs</div></a></li>
                                <li><a href="#"><div className="item"><i className="far fa-file-alt bg-primary"></i>Documents</div></a></li>
                                <li><a href="#"><div className="item"><i className="far fa-file-excel bg-success"></i>Spreadsheet</div></a></li>
                                <li><a href="#"><div className="item"><i className="far fa-file-powerpoint bg-danger"></i>Presentation</div></a></li>
                                <li><a href="#"><div className="item"><i className="far fa-file-image bg-warning"></i>Photos & Images</div></a></li>
                                <li><a href="#"><div className="item"><i className="far fa-file-video bg-info"></i>Videos</div></a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

            <div className="d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                <i onClick={HanldesubMenu} className="ri-menu-3-line"></i>
                </button>
                {icons===true ? <div className='navbar-collapse ' id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-list align-items-center">
                    <li className="nav-item nav-icon search-content">
                        <a className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i onClick={toggeleSearch} className="ri-search-line cursor-pointer"></i>
                        </a>
                        <div ref={dropdownRef} className={search ? "iq-search-bar iq-sub-dropdown show dropdown-menu" :"hidden"} aria-labelledby="dropdownSearch">
                            <form action="#" className="searchbox p-2">
                                <div className="form-group mb-0 position-relative">
                                <input type="text" className="text search-input font-size-12" placeholder="type here to search..."/>
                                <a href="#" className="search-link"><i className="las la-search"></i></a> 
                                </div>
                            </form>
                        </div>
                   </li> 
                
                  <HelpNaVComp/>
                    <Settings/>
                   <Profile/>
                    </ul>                     
                </div> :
                
                <div  className='hidden lg:block' id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-list align-items-center">
                    <li className="nav-item nav-icon search-content">
                        <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-search-line"></i>
                        </a>
                        <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                            <form action="#" className="searchbox p-2">
                                <div className="form-group mb-0 position-relative">
                                <input type="text" className="text search-input font-size-12" placeholder="type here to search..."/>
                                <a href="#" className="search-link"><i className="las la-search"></i></a> 
                                </div>
                            </form>
                        </div>
                   </li> 
                
                  <HelpNaVComp/>
                    <Settings/>
                   <Profile/>
                    </ul>                     
                </div> 
                }
            </div>
        </nav>
        
    </div>
</div>
<div ref={dropdownNavBarRef}>

   <SideNavBar   show={showSideBar} />
</div>

    </>
  )
}

export default TopNavbar