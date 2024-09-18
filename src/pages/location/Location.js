import { useLocation } from "react-router-dom";
import "./Location.css";

export default function Location() {
  const { state } = useLocation();

  return (
    <div
      className="location-page"
      style={{ backgroundImage: `url(${state?.thumbnail})` }}
    >
      <div
        className="location-content-div"
        style={{ backgroundImage: `url(${state?.thumbnail})` }}
      >
        <div className="location-content">
          <h2 className="mb-3">{state?.title}</h2>
          <h4>Location: {state?.location}</h4>

          {/* Timings */}
          {state?.timings && (
            <div className="timings mb-3 row">
              <h4>Timings:</h4>
              <p className="opening col-lg-5">
                Opening: {state?.timings?.opening}
              </p>
              <p className="col-lg-5">Closing: {state?.timings?.closing}</p>
            </div>
          )}

          {/* Pricings */}
          {state?.entryFee && <h3 className="mt-3">Pricings</h3>}
          <div className="pricings row">
            {state?.entryFee &&
              Object.keys(state.entryFee).map((item, index) => (
                <div key={index} className="col-lg-6">
                  <p>{item}</p>
                  <ul>
                    {state?.entryFee[item] &&
                      Object.keys(state.entryFee[item]).map((fee, i) => (
                        <li
                          className="mb-2"
                          key={i}
                        >{`${fee}: ${state.entryFee[item][fee]}`}</li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>

          {/* Hacks */}
          {state?.hacks && (
            <>
              <h3>Hacks</h3>
              <ul>
                {state.hacks.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Tips */}
          {state?.tips && (
            <>
              <h3>Tips</h3>
              <ul>
                {state.tips.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Why Visit */}
          {state?.whyVisit && (
            <>
              <h3>Why visit</h3>
              <ul>
                {state.whyVisit.map((item, index) => (
                  <li className="mb-2" key={index}>
                    <span>{Object.keys(item)[0]}</span>
                    {`: ${Object.values(item)[0]}`}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
