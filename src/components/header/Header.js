import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isServiceHovered, setIsDestination] = useState(false);

  const { pathname } = useLocation();

  const homeRef = useRef();
  const aboutRef = useRef();
  const destinationRef = useRef();
  const portfolioRef = useRef();

  useEffect(() => {
    if (pathname.split("/").includes("about-me")) {
      aboutRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      destinationRef.current.classList.remove("active");
      portfolioRef.current.classList.remove("active");
    } else if (pathname.split("/").includes("servicesy")) {
      destinationRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      portfolioRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    } else if (pathname.split("/").includes("portfolio")) {
      portfolioRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      destinationRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    } else {
      homeRef.current.classList.add("active");
      destinationRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const dropDownMouseIn = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const dropDownMouseLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const targetRect = target.getBoundingClientRect();
        const offset = 0.15 * window.innerHeight;
        const scrollPosition = window.pageYOffset + targetRect.top - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>
        <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-option" ref={homeRef}>
            Home
          </Link>

          <div className="navs">
            <Link
              to=""
              className="nav-option"
              ref={destinationRef}
              onMouseEnter={(e) => {
                dropDownMouseIn(e);
                setIsDestination(true);
              }}
              onMouseLeave={(e) => {
                dropDownMouseLeave(e);
                setIsDestination(false);
              }}
              onClick={() => {
                scrollToSection("destinations");
                setIsDestination(false);
              }}
            >
              Destinations
            </Link>
            <div
              className={`drop-down ${isServiceHovered && "hovered"}`}
              onMouseEnter={(e) => {
                dropDownMouseIn(e);
                setIsDestination(true);
              }}
              onMouseLeave={(e) => {
                dropDownMouseLeave(e);
                setIsDestination(false);
              }}
            >
              <Link
                to="/activities/culture-and-heritage"
                className="drop-down-option"
                state={{ id: 0 }}
              >
                Culture and Heritage
              </Link>
              <Link
                to="/activities/nature-and-adventure"
                className="drop-down-option"
                state={{ id: 1 }}
              >
                Nature and Adventure
              </Link>
              <Link
                to="activities/urban-exploration"
                className="drop-down-option"
                state={{ id: 2 }}
              >
                Urban Exploration
              </Link>

              <Link
                to="/activities/relaxation-and-wellness"
                className="drop-down-option"
                state={{ id: 3 }}
              >
                Relaxation and Wellness
              </Link>
            </div>
          </div>

          <div className="navs">
            <Link
              to=""
              className="nav-option"
              ref={aboutRef}
              onMouseEnter={(e) => {
                dropDownMouseIn(e);
              }}
              onMouseLeave={(e) => {
                dropDownMouseLeave(e);
              }}
              onClick={() => scrollToSection("about")}
            >
              About us
            </Link>
          </div>

          <Link
            to="/"
            onClick={() => scrollToSection("what-we-do")}
            className="nav-option"
          >
            WHAT WE DO
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("stats")}
            className="nav-option"
          >
            STATS
          </Link>

          <div
            className="navs"
            onMouseEnter={(e) => {
              dropDownMouseIn(e);
            }}
            onMouseLeave={(e) => {
              dropDownMouseLeave(e);
            }}
          >
            <div
              className="nav-option"
              onMouseEnter={(e) => {
                dropDownMouseIn(e);
              }}
              onMouseLeave={(e) => {
                dropDownMouseLeave(e);
              }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// export default function Header() {
//   const scrollToElement = (elementId) => {
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header id="header" className="header d-flex align-items-center fixed-top">
//       <div className="container-fluid d-flex align-items-center justify-content-between">
//         <Link
//           to="/"
//           className="logo d-flex align-items-center me-auto me-lg-0"
//         ></Link>

//         <nav id="navbar" className="navbar">
//           <ul>
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("hero")}
//                 className="active scrollto"
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("about")}
//                 className="scrollto"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("what-we-do")}
//                 className="scrollto"
//               >
//                 WHAT WE DO
//               </Link>
//             </li>
//             <li className="dropdown">
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("destinations")}
//                 className="dropbtn"
//               >
//                 Destinations
//               </Link>
//               <div className="dropdown-content">
//                 <Link to="/activities/culture-and-heritage" state={{ id: 0 }}>
//                   Culture and Heritage
//                 </Link>
//                 <Link to="/activities/nature-and-adventure" state={{ id: 1 }}>
//                   Nature and Adventure
//                 </Link>
//                 <Link to="/activities/urban-exploration" state={{ id: 2 }}>
//                   Urban Exploration
//                 </Link>
//                 <Link
//                   to="/activities/relaxation-and-wellness"
//                   state={{ id: 3 }}
//                 >
//                   Relaxation and Wellness
//                 </Link>
//               </div>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("stats")}
//                 className="scrollto"
//               >
//                 STATS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => scrollToElement("contact")}
//                 className="scrollto"
//               >
//                 GET IN TOUCH
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="header-social-links"></div>
//         <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
//         <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
//       </div>
//     </header>
//   );
// }
