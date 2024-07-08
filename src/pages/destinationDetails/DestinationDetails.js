import { useLocation } from "react-router-dom";
import "./DestinationDetails.css";

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
        <div className="highlights">
          {state?.highlights?.map((item, index) => (
            <div key={index} className="highlight">
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
