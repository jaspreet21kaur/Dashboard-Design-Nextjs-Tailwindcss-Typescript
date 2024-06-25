import React, { useEffect, useRef } from 'react';

const StorageProgress = () => {
    const progressBarHorizontal = useRef<HTMLSpanElement>(null);
    const progressBarVertical = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    // Function to animate horizontal progress bar
    const animateHorizontalProgressBar = () => {
      const progressBar = progressBarHorizontal.current;
      if (progressBar) {
        const width = progressBar.getAttribute('data-percent');
        progressBar.style.transition = 'width 2s';
        progressBar.style.width = `${width}%`;
      }
    };

    // Function to animate vertical progress bar
    const animateVerticalProgressBar = () => {
        const progressBar = progressBarVertical.current;
        if (progressBar) {
          const height = progressBar.getAttribute('data-percent');
            progressBar.style.transition = 'height 2s';
            progressBar.style.height = `${height}%`;
        }
      };

    // Trigger animations after a short delay (simulating setTimeout behavior)
    setTimeout(() => {
      animateHorizontalProgressBar();
      animateVerticalProgressBar();
    }, 100);

   
  }, []);

  return (
    <div className="sidebar-bottom">
      <h4 className="mb-3"><i className="las la-cloud mr-2"></i>Storage</h4>
      <p>17.1 / 20 GB Used</p>
      <div className="iq-progress-bar mb-3">
        <span
          ref={progressBarHorizontal}
          className="bg-primary iq-progress progress-1"
          data-percent={67}
        ></span>
      </div>
      <p>75% Full - 3.9 GB Free</p>
      <div className="progress-bar-vertical mb-3">
        <span
          ref={progressBarVertical}
          className="bg-primary iq-progress progress-2"
          data-percent={40}
        ></span>
      </div>
      <a href="#" className="btn btn-outline-primary view-more mt-4">Buy Storage</a>
    </div>
  );
};

export default StorageProgress;
