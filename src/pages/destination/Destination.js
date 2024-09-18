import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "./Destination.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export default function Destination() {
  const { state } = useLocation();
  const scrollContainerRef = useRef(null);
  const highlightsRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [heroBg, setHeroBg] = useState(state?.banner);
  const [isLocations, setIsLocations] = useState(false);

  const handleLocationHover = (index) => {
    setVisibleIndex(index);
    scrollToLocation(index);
    scrollToHighlight(index);
  };

  const scrollToLocation = (index) => {
    const container = scrollContainerRef.current;
    if (container && container.children.length > index) {
      // Check if container exists and has children
      const location = container.children[index];
      location.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center the item vertically for better visibility
      });
    }
  };

  const scrollToHighlight = (index) => {
    const highlightContainer = highlightsRef.current;
    if (highlightContainer && highlightContainer.children.length > index) {
      // Check if highlightContainer exists and has children
      const highlight = highlightContainer.children[index];
      const containerWidth = highlightContainer.offsetWidth;
      const highlightWidth = highlight.offsetWidth;

      // Calculate the amount to scroll to center the hovered item
      const scrollLeft =
        highlight.offsetLeft - containerWidth / 2 + highlightWidth / 2;

      highlightContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight } = event.target;
    const index = Math.round(scrollTop / (clientHeight / 3)); // Calculate the index based on scroll position
    setVisibleIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isLocations]); // Add isLocations as a dependency to re-run the effect when it changes

  return (
    <div
      className="destination-details"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="destination-details-hero row d-flex flex-lg-row flex-column-reverse">
        {!isLocations ? (
          <div className="destination-details-content col-lg-4">
            <h2>{state.name}</h2>
            <p>{state.description}</p>
            <div
              className="destination-btn"
              onClick={() => setIsLocations(true)}
            >
              See locations
            </div>
          </div>
        ) : (
          <div className="locations col-lg-4">
            <div className="d-flex flex-column align-items-center">
              <h5 className="mt-2">LOCATIONS</h5>
              <div className="scroll-locations" ref={scrollContainerRef}>
                {state.highlights.map(
                  (item, index) =>
                    item.location && (
                      <Link
                        to={item.title.toLowerCase().replace(/\s+/g, "-")}
                        state={item}
                        className={`location ${
                          visibleIndex === index ? "location-hover" : ""
                        } ${
                          visibleIndex === index + 1 ||
                          visibleIndex === index - 1
                            ? "location-nearby"
                            : ""
                        } ${
                          index < visibleIndex - 1 || index > visibleIndex + 1
                            ? "location-hidden"
                            : ""
                        }`}
                        key={index}
                        onMouseEnter={() => {
                          handleLocationHover(index);
                          setHeroBg(item.thumbnail);
                        }}
                      >
                        <p>{item.location}</p>
                      </Link>
                    )
                )}
              </div>
              <div
                className="destination-btn"
                onClick={() => setIsLocations(false)}
              >
                Start your adventure
              </div>
            </div>
          </div>
        )}
        <div className="right col-lg-8">
          <div className="highlights" ref={highlightsRef}>
            {state?.highlights?.map((item, index) => (
              <Link
                to={item.title.toLowerCase().replace(/\s+/g, "-")}
                key={index}
                state={item}
                className={`highlight ${
                  visibleIndex === index ? "highlight-hover" : ""
                } ${visibleIndex > index ? "highlight-fade" : ""}`}
                style={{
                  backgroundImage: `url(${item.thumbnail})`,
                  color: "white",
                }}
                onMouseEnter={() => {
                  handleLocationHover(index);
                  setHeroBg(item.thumbnail);
                }}
              >
                <h4>{item.title}</h4>
              </Link>
            ))}
          </div>

          <div className="direction-indicator">
            <div className="indicator">
              <ArrowBackIosIcon />
            </div>
            <div className="indicator">
              <ArrowForwardIosIcon />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
