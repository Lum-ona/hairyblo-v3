import "./WhatWeDo.css";
import vid from "../../assets/img/WEBSITE_CLIP_HOMEPAGE.mp4";
import { Fade, Zoom } from "react-reveal";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="what-we-do ">
      <Zoom>
        <div className="vid-div col-lg-2">
          <video preload="true" autoPlay muted loop className="portfolio-vid">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </Zoom>
      <Fade right>
        <div className="container row d-flex justify-content-around">
          <div className="col-lg-5"></div>
          <div className="content col-lg-7 text-center">
            <div className="section-header">
              <p style={{ color: "yellow" }}>Unveiling Travel Secrets</p>
            </div>

            <p>
              At Hairyblo, we transform the way you experience travel by
              providing expertly curated lists of the coolest spots around the
              globe, in-depth destination guides, and engaging videos.
            </p>
            <p>
              Make informed decisions with our honest traveler reviews and
              easily access essential resources through our convenient links to
              relevant websites.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
