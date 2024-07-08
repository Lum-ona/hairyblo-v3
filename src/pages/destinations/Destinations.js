import { useLocation } from "react-router-dom";
import DestinationCard from "./components/destinationCard/DestinationCard";
import "./Destinations.css";
import { destinationsData } from "./destinationData";
import { useEffect } from "react";

export default function Destinations() {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = destinationsData.find(
    (destination) => destination.id === state.id
  );

  // Utility function to chunk the array
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk the destinations array into smaller arrays of max 3 items each
  const chunkedDestinations = chunkArray(data.destinations, 3);

  return (
    <div className="destinations">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="">{data.mainDescription}</p>
        <div className="destinations-list">
          {chunkedDestinations.map((chunk, rowIndex) => (
            <div key={rowIndex} className="destinations-row">
              {chunk.map((dest, destIndex) => (
                <DestinationCard
                  key={destIndex}
                  name={dest.title}
                  description={dest.description}
                  price={dest.price}
                  location={dest.location}
                  highlights={dest.highlights}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
