import { useLocation } from "react-router-dom";
import "./DestinationDetails.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export default function DestinationDetails() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="destination-details">
      <div className="destination-details-hero">
        <div className="destination-details-content">
          <h2>{state.name}</h2>
          <p>{state.description}</p>
          <div className="btn">Start your adventure</div>
        </div>
        <div className="right">
          <div className="highlights">
            {state?.highlights?.map((item, index) => (
              <div key={index} className="highlight">
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
      {/* location, timings, packages, review, hacks */}
      <main className="container">
        <div className="destination-action-btns">
          <div className="action-btn">
            <PlaceIcon className="btn-icon" />
            <div>
              <h5>Location</h5>
              <p>Lamu</p>
            </div>
          </div>
          <div className="action-btn">
            <AccessTimeIcon className="btn-icon" />
            <div>
              <h5>Timings</h5>
              <p>Opens: 8am</p>
              <p>Closes: 8pm</p>
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
