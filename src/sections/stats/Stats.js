import "./Stats.css";

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="text-center title">
          <h3>We are blowing up the medias</h3>
        </div>

        <div className="row counters position-relative">
          <div className="col-lg-3 col-12 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="33000"
              data-purecounter-duration="4"
              className="purecounter"
            >
              33000
            </span>
            <p>Followers</p>
          </div>

          <div className="col-lg-3 col-12 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="100"
              data-purecounter-duration="4"
              className="purecounter"
            >
              100
            </span>
            <p>Product Design</p>
          </div>

          <div className="col-lg-3 col-12 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="50"
              data-purecounter-duration="4"
              className="purecounter"
            >
              50
            </span>
            <p>Job Event</p>
          </div>
          <div className="col-lg-3 col-12 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="10"
              data-purecounter-duration="4"
              className="purecounter"
            >
              10
            </span>
            <p>Brand Deals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
