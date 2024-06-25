import React, { useState } from "react";

const SubNavOtherPageList = () => {
  // State for toggling submenus
  const [showOtherPage, setShowOtherPage] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showPagesError, setShowPagesError] = useState(false);

  // Toggle functions for each submenu
  const toggleOtherPage = () => {
    setShowOtherPage(!showOtherPage);
  };

  const toggleUser = () => {
    setShowUser(!showUser);
  };

  const toggleUI = () => {
    setShowUI(!showUI);
  };

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  const togglePricing = () => {
    setShowPricing(!showPricing);
  };

  const togglePagesError = () => {
    setShowPagesError(!showPagesError);
  };

  return (
    <li className=" ">
      <a
        className={showOtherPage ? "collapsed" : "collapsed collapsed1"} //initial defaultstate
        onClick={toggleOtherPage}
        aria-expanded={showOtherPage ? "true" : "false"}
      >
        <i className="lab la-wpforms iq-arrow-left cursor-pointer"></i>
        <span className="cursor-pointer">other page</span>
        {showOtherPage ? (
          <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
        ) : (
          <i className="las la-angle-right iq-arrow-right arrow-active"></i>
        )}
      </a>
      <ul
        className={showOtherPage ? " show" : "hidden"}
        data-parent="#iq-sidebar-toggle"
      >
        <li className=" ">
          <a
            className={showUser ? "collapsed" : "collapsed collapsed1"}
            onClick={toggleUser}
            aria-expanded={showUser ? "true" : "false"}
          >
            <i className="las la-user-cog cursor-pointer"></i>
            <span className="cursor-pointer">User Details</span>
            {showUser ? (
              <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
            ) : (
              <i className="las la-angle-right iq-arrow-right arrow-active"></i>
            )}
          </a>
          <ul className={showUser ? "show" : "hidden"} data-parent="#otherpage">
            <li className=" ">
              <a href="../app/user-profile.html">
                <i className="las la-id-card cursor-pointer"></i>
                <span className="cursor-pointer">User Profile</span>
              </a>
            </li>
            <li className=" ">
              <a href="../app/user-add.html">
                <i className="las la-user-plus cursor-pointer"></i>
                <span className="cursor-pointer">User Add</span>
              </a>
            </li>
            <li className=" ">
              <a href="../app/user-list.html">
                <i className="las la-list-alt cursor-pointer"></i>
                <span className="cursor-pointer">User List</span>
              </a>
            </li>
          </ul>
        </li>
        <li className=" ">
          <a
            className={showUI ? "collapsed" : "collapsed collapsed1"}
            onClick={toggleUI}
            aria-expanded={showUI ? "true" : "false"}
          >
            <i className="lab la-uikit iq-arrow-left cursor-pointer"></i>
            <span className="cursor-pointer">UI Elements</span>
            {showUI ? (
              <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
            ) : (
              <i className="las la-angle-right iq-arrow-right arrow-active"></i>
            )}
          </a>
          <ul className={showUI ? " show" : " hidden"} data-parent="#otherpage">
            <li className=" ">
              <a href="../backend/ui-avatars.html">
                <i className="las la-user-tie cursor-pointer"></i>
                <span className="cursor-pointer">Avatars</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-alerts.html">
                <i className="las la-exclamation-triangle cursor-pointer"></i>
                <span className="cursor-pointer">Alerts</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-badges.html">
                <i className="las la-id-badge cursor-pointer"></i>
                <span className="cursor-pointer">Badges</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-breadcrumb.html">
                <i className="las la-ellipsis-h cursor-pointer"></i>
                <span className="cursor-pointer">Breadcrumb</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-buttons.html">
                <i className="las la-ticket-alt cursor-pointer"></i>
                <span className="cursor-pointer">Buttons</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-buttons-group.html">
                <i className="las la-object-group cursor-pointer"></i>
                <span className="cursor-pointer">Buttons Group</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-boxshadow.html">
                <i className="las la-boxes cursor-pointer"></i>
                <span className="cursor-pointer">Box Shadow</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-colors.html">
                <i className="las la-brush cursor-pointer"></i>
                <span className="cursor-pointer">Colors</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-cards.html">
                <i className="las la-credit-card cursor-pointer"></i>
                <span className="cursor-pointer">Cards</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-carousel.html">
                <i className="las la-sliders-h cursor-pointer"></i>
                <span className="cursor-pointer">Carousel</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-grid.html">
                <i className="las la-th-large cursor-pointer"></i>
                <span className="cursor-pointer">Grid</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-helper-classes.html">
                <i className="las la-hands-helping cursor-pointer"></i>
                <span className="cursor-pointer">Helper classes</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-images.html">
                <i className="las la-image cursor-pointer"></i>
                <span className="cursor-pointer">Images</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-list-group.html">
                <i className="las la-list-alt cursor-pointer"></i>
                <span className="cursor-pointer">list Group</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-media-object.html">
                <i className="las la-photo-video cursor-pointer"></i>
                <span className="cursor-pointer">Media</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-modal.html">
                <i className="las la-columns cursor-pointer"></i>
                <span className="cursor-pointer">Modal</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-notifications.html">
                <i className="las la-bell cursor-pointer"></i>
                <span className="cursor-pointer">Notifications</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-pagination.html">
                <i className="las la-ellipsis-h cursor-pointer"></i>
                <span className="cursor-pointer">Pagination</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-popovers.html">
                <i className="las la-spinner cursor-pointer"></i>
                <span className="cursor-pointer">Popovers</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-progressbars.html">
                <i className="las la-heading cursor-pointer"></i>
                <span className="cursor-pointer">Progressbars</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-typography.html">
                <i className="las la-tablet cursor-pointer"></i>
                <span className="cursor-pointer">Typography</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-tabs.html">
                <i className="las la-tablet cursor-pointer"></i>
                <span className="cursor-pointer">Tabs</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-tooltips.html">
                <i className="las la-magnet cursor-pointer"></i>
                <span className="cursor-pointer">Tooltips</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/ui-embed-video.html">
                <i className="las la-play-circle cursor-pointer"></i>
                <span className="cursor-pointer">Video</span>
              </a>
            </li>
          </ul>
        </li>
        <li className=" ">
          <a
            className={showAuth ? "collapsed" : "collapsed collapsed1"}
            onClick={toggleAuth}
            aria-expanded={showAuth ? "true" : "false"}
          >
            <i className="las la-torah iq-arrow-left cursor-pointer"></i>
            <span className="cursor-pointer">Authentication</span>
            {showAuth ? (
              <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
            ) : (
              <i className="las la-angle-right iq-arrow-right arrow-active"></i>
            )}
          </a>
          <ul
            className={showAuth ? "  show" : " hidden"}
            data-parent="#otherpage"
          >
            <li className=" ">
              <a href="../backend/auth-sign-in.html">
                <i className="las la-sign-in-alt cursor-pointer"></i>
                <span className="cursor-pointer">Login</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/auth-sign-up.html">
                <i className="las la-registered cursor-pointer"></i>
                <span className="cursor-pointer">Register</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/auth-recoverpw.html">
                <i className="las la-unlock-alt cursor-pointer"></i>
                <span className="cursor-pointer">Recover Password</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/auth-confirm-mail.html">
                <i className="las la-envelope-square cursor-pointer"></i>
                <span className="cursor-pointer">Confirm Mail</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/auth-lock-screen.html">
                <i className="las la-lock cursor-pointer"></i>
                <span className="cursor-pointer">Lock Screen</span>
              </a>
            </li>
          </ul>
        </li>
        <li className=" ">
          <a
            className={showPricing ? "collapsed" : "collapsed collapsed1"}
            onClick={togglePricing}
            aria-expanded={showPricing ? "true" : "false"}
          >
            <i className="las la-coins cursor-pointer"></i>
            <span className="cursor-pointer">Pricing</span>
            {showPricing ? (
              <i className="las la-angle-down iq-arrow-right arrow-hover "></i>
            ) : (
              <i className="las la-angle-right iq-arrow-right arrow-active"></i>
            )}
          </a>
          <ul
            className={showPricing ? "  show" : "hidden"}
            data-parent="#otherpage"
          >
            <li className=" ">
              <a href="../backend/pricing.html">
                <i className="las la-weight cursor-pointer"></i>
                <span className="cursor-pointer">Pricing 1</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/pricing-2.html">
                <i className="las la-dna cursor-pointer"></i>
                <span className="cursor-pointer">Pricing 2</span>
              </a>
            </li>
          </ul>
        </li>
        <li className=" ">
          <a
            className={showPagesError ? "collapsed" : "collapsed collapsed1"}
            onClick={togglePagesError}
            aria-expanded={showPagesError ? "true" : "false"}
          >
            <i className="las la-exclamation-triangle cursor-pointer"></i>
            <span className="cursor-pointer">Error</span>
            {showPagesError ? (
              <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
            ) : (
              <i className="las la-angle-right iq-arrow-right arrow-active"></i>
            )}
          </a>
          <ul
            className={showPagesError ? "  show" : "hidden"}
            data-parent="#otherpage"
          >
            <li className=" ">
              <a href="../backend/pages-error.html">
                <i className="las la-bomb cursor-pointer"></i>
                <span className="cursor-pointer">Error 404</span>
              </a>
            </li>
            <li className=" ">
              <a href="../backend/pages-error-500.html">
                <i className="las la-exclamation-circle cursor-pointer"></i>
                <span className="cursor-pointer">Error 500</span>
              </a>
            </li>
          </ul>
        </li>
        <li className=" ">
          <a href="../backend/pages-blank-page.html">
            <i className="las la-pager cursor-pointer"></i>
            <span className="cursor-pointer">Blank Page</span>
          </a>
        </li>
        <li className=" ">
          <a href="../backend/pages-maintenance.html">
            <i className="las la-cubes cursor-pointer"></i>
            <span className="cursor-pointer">Maintenance</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default SubNavOtherPageList;
