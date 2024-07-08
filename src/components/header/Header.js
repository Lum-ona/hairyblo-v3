import "./Header.css";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="/"
          className="logo d-flex align-items-center me-auto me-lg-0"
        ></a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a href="./#hero" className="active scrollto">
                HOME
              </a>
            </li>
            <li>
              <a href="./#about" className="scrollto">
                About
              </a>
            </li>
            <li>
              <a href="./#what-we-do" className="scrollto">
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href="./#destinations" className="scrollto">
                Destinations
              </a>
            </li>
            <li>
              <a href="./#stats" className="scrollto">
                STATS
              </a>
            </li>
            <li>
              <a href="./#contact" className="scrollto">
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-social-links"></div>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
