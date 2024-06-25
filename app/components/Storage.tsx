import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const Storage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ApexCharts | null>(null); // Reference to store chart instance

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

  const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: "auto",
    right: 0,
    zIndex: 1000,
    minWidth: "9rem",
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

  useEffect(() => {
    if (typeof window !== "undefined" && typeof ApexCharts !== 'undefined' && !chartRef.current) {
      const options = {
        series: [{
          name: "Desktops",
          data: [10, 35, 25, 60, 59, 25, 55, 20, 35]
        }],
        colors: ["#8f93f6"],
        chart: {
          toolbar: {
            show: false
          },
          height: 225,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            minHeight: 20,
            maxHeight: 20
          }
        },
        yaxis: {
          show: true,
          labels: {
            minWidth: 15,
            maxWidth: 15
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#layout-1-chart2"), options);
      chart.render();
      chartRef.current = chart; // Store chart instance in chartRef
    }
  }, []);

  return (
    <div className="col-lg-8">
      <div className="card card-block card-stretch card-height">
        <div className="card-header d-flex justify-content-between pb-0">
          <div className="header-title">
            <h4 className="card-title">Storage</h4>
          </div>
          <div className="card-header-toolbar d-flex align-items-center">
            <div className="dropdown" onClick={toggleDropdown}>
              <span className="dropdown-toggle btn  dropdown-bg border border-primary text-primary rounded" id="dropdownMenuButton11"
                data-toggle="dropdown">
                Monthly<i className="ri-arrow-down-s-line ml-1"></i>
              </span>
              {showDropdown && (
                <div className=" shadow-none " style={dropdownMenuStyle}
                  aria-labelledby="dropdownMenuButton11">
                  <a className="dropdown-item" href="#">Monthly</a>
                  <a className="dropdown-item" href="#">Weekly</a>
                  <a className="dropdown-item" href="#">Yearly</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div id="layout-1-chart2"></div> {/* Ensure chart container has unique ID */}
        </div>
      </div>
    </div>
  );
};

export default Storage;
