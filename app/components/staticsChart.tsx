import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const StaticsChart = () => {
  const chartRef = useRef<am4charts.GaugeChart | null>(null);

  useEffect(() => {
    let chart: am4charts.GaugeChart | null = null;
    let axis2: am4charts.ValueAxis | undefined;

    if (typeof window !== 'undefined') {
      am4core.useTheme(am4themes_animated);

      chart = am4core.create('layout-1-chart', am4charts.GaugeChart);
      chart.innerRadius = am4core.percent(82);

      axis2 = chart.xAxes.push(new am4charts.ValueAxis());
      axis2.min = 0;
      axis2.max = 100;
      axis2.strictMinMax = true;
      axis2.renderer.labels.template.disabled = true;
      axis2.renderer.ticks.template.disabled = true;
      axis2.renderer.grid.template.disabled = true;

      // Create hand for the gauge
      const hand = chart.hands.push(new am4charts.ClockHand());
      hand.axis = axis2;
      hand.innerRadius = am4core.percent(20);
      hand.startWidth = 10;
      hand.pin.disabled = true;
      hand.value = 50; // Initial value

      // Update ranges dynamically
      const range0 = axis2.axisRanges.create();
      range0.value = 0;
      range0.endValue = 50;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = am4core.color("#8f93f6");

      const range1 = axis2.axisRanges.create();
      range1.value = 50;
      range1.endValue = 100;
      range1.axisFill.fillOpacity = 1;
      range1.axisFill.fill = am4core.color("#FAFAFA");

      // Label for the gauge
      const label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = 0;
      label.x = am4core.percent(50);
      label.y = am4core.percent(100);
      label.horizontalCenter = "middle";
      label.verticalCenter = "bottom";
      label.text = "50%";

      // Update label and ranges on hand value change
      hand.events.on("propertychanged", function(ev) {
        range0.endValue = ev.target.value;
        range1.value = ev.target.value;
        label.text = axis2!.positionToValue(hand.currentPosition).toFixed(1);
        axis2!.invalidate();
      });

      // Simulate random updates
      setInterval(function() {
        const value = Math.round(Math.random() * 100);
        const animation = new am4core.Animation(hand, {
          property: "value",
          to: value
        }, 1000, am4core.ease.cubicOut).start();
      }, 2000);

      // Save chart instance to ref for cleanup
      chartRef.current = chart;
    }

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  // Function to update AMChart for dark mode
  const amChartUpdate = (chart: am4charts.GaugeChart, detail: { dark: boolean }) => {
    if (detail.dark) {
      chart.stroke = am4core.color(getComputedStyle(document.documentElement).getPropertyValue('--white'));
    }
    chart.validateData();
  };

  // Event listener for dark mode changes
  useEffect(() => {
    const body = document.querySelector('body');
    if(body){

      const handleDarkModeChange = () => {
        amChartUpdate(chartRef.current!, { dark: body.classList.contains('dark') });
      };
      
      body.addEventListener('ChangeColorMode', handleDarkModeChange);
      return () => {
        body.removeEventListener('ChangeColorMode', handleDarkModeChange);
      };
    }
    
  }, []);

  return (
    <div className="col-lg-4">
      <div className="card card-block card-stretch card-height ">
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Statistic</h4>
          </div>
        </div>
        <div className="card-body">
          <div id="layout-1-chart"></div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-6">
              <div className="media align-items-center">
                <div className="icon iq-icon-box bg-primary rounded icon-statistic">
                  <i className="las la-long-arrow-alt-down"></i>
                </div>
                <div className="media-body ml-3">
                  <p className="mb-0">Downloads</p>
                  <h5>12,594</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <div className="media align-items-center">
                <div className="icon iq-icon-box bg-light rounded icon-statistic">
                  <i className="las la-long-arrow-alt-up"></i>
                </div>
                <div className="media-body ml-3">
                  <p className="mb-0">Uploads</p>
                  <h5>1,458</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticsChart;
