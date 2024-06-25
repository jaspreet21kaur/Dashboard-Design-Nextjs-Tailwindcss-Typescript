"use client"
import React, { use, useEffect, useState } from "react";
import SideNavBar from "./components/sideNavbar";
import TopNavbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import "../public/assets/css/backend.css";
import "../public/assets/css/backend-plugin.min.css";
import "../public/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../public/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "../public/assets/vendor/remixicon/fonts/remixicon.css";

const App = () => {
  const [logo, setlogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setlogo(false);
    }, 1000);
  }, []);

  return (
    <>
    
      {logo && (
        <div id="loading">
          <div id="loading-center"></div>
        </div>
      )}

      <div className="wapper ">
        <SideNavBar show={false} />
        <TopNavbar />
        <Content />
      </div>
      <Footer />
    
    </>
  );
};

export default App;
