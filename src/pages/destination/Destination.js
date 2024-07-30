import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./Destination.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export default function Destination() {
  const { state } = useLocation();
  const highlightsRef = useRef(null);
  const [highlightIndex, setHighlightIndex] = useState(null);

  const handleLocationHover = (index) => {
    setHighlightIndex(index);
    // if (index !== 0) {
    const highlight = highlightsRef.current.children[index];
    highlight.scrollIntoView({
      behavior: "smooth",
      inline: index === 0 ? "center" : "start", // Adjust scrolling to center to avoid clipping
      block: "nearest",
    });
    // }
  };

  const handleHighlightHover = (index) => {
    setHighlightIndex(index);
  };

  const handleHoverExit = () => {
    setHighlightIndex(null);
  };

  return (
    <div className="destination-details">
      <div
        className="destination-details-hero"
        style={{ backgroundImage: `url(${state.banner})` }}
      >
        <div className="destination-details-content">
          <h2>{state.name}</h2>
          <p>{state.description}</p>
          <div className="btn">Start your adventure</div>
        </div>
        <div className="right">
          <div className="highlights" ref={highlightsRef}>
            {state?.highlights?.map((item, index) => (
              <div
                key={index}
                className={`highlight ${
                  highlightIndex === index ? "highlight-hover" : ""
                }`}
                style={{ backgroundImage: `url(${item.thumbnail})` }}
                onMouseEnter={() => handleHighlightHover(index)}
                onMouseLeave={handleHoverExit}
              >
                <h4>{item.title}</h4>
              </div>
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
      <main className="container">
        <div className="destination-action-btns">
          <div className="action-btn">
            <PlaceIcon className="btn-icon" />
            <div>
              <h5>Locations</h5>
              {state.highlights.map(
                (item, index) =>
                  item.location && (
                    <Link
                      className={`location ${
                        highlightIndex === index ? "location-hover" : ""
                      }`}
                      key={index}
                      onMouseEnter={() => handleLocationHover(index)}
                      onMouseLeave={handleHoverExit}
                    >
                      <p>{item.location},</p>
                    </Link>
                  )
              )}
            </div>
          </div>
          <div className="action-btn button">
            <AltRouteIcon className="btn-icon" />
            <div>
              <h5>Hacks</h5>
              <p>Lamu</p>
            </div>
          </div>
          <div className="action-btn button">
            <Inventory2Icon className="btn-icon" />
            <div>
              <h5>Packages</h5>
              <p>Lamu</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
