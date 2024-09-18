import { useLocation } from "react-router-dom";
import ActivityCard from "./components/activityCard/ActivityCard";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebaseConfig";

import "./Activities.css";
import { useEffect, useState } from "react";
import { Flip, Rotate } from "react-reveal";

export default function Activities() {
  const { state } = useLocation();
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const starCountRef = ref(db);

    const unsubscribe = onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setActivitiesData(data);
        } else {
          console.log("No data available");
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    // Cleanup the subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const data = activitiesData.find((activities) => activities.id === state.id);

  // Utility function to chunk the array
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  // Chunk the activities array into smaller arrays of max 3 items each
  const chunkedactivities = chunkArray(data.activities || [], 3);

  return (
    <div className="activities">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="">{data.mainDescription}</p>
        <div className="activities-list">
          {chunkedactivities.map((chunk, rowIndex) => (
            <div
              key={rowIndex}
              className="activities-row row justify-content-center justify-content-lg-between"
            >
              {chunk.map((dest, destIndex) => (
                <ActivityCard key={destIndex} name={dest.title} data={dest} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
