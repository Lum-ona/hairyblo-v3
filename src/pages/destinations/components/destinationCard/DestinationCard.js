import { Link } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({ name, description, highlights }) {
  return (
    <Link
      to={`${name.toLowerCase().replace(/\s+/g, "-")}`}
      state={{ description: description, name: name, highlights: highlights }}
      className="destination-card"
    >
      <div className="destination-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
