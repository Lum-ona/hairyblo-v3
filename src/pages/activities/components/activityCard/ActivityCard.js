import { Rotate } from "react-reveal";
import { Link } from "react-router-dom";
import "./ActivityCard.css";

export default function ActivityCard({ name, data }) {
  return (
    <Rotate>
      <div
        className="activity-card"
        style={{ backgroundImage: `url(${data?.thumbnail})` }}
      >
        <Link
          to={`${name.toLowerCase().replace(/\s+/g, "-")}`}
          state={{
            description: data?.description,
            name: data?.title,
            highlights: data?.highlights,
            banner: data?.banner,
          }}
        >
          <div className="activity-card-content">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <p>View More</p>
          </div>
        </Link>
      </div>
    </Rotate>
  );
}
