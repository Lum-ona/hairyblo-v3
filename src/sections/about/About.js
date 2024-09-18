import "./About.css";
import { Fade } from "react-reveal";

export default function About() {
  return (
    <div id="about" className="paddsection">
      <Fade left>
        <div className="about-left col-lg-8" data-aos="fade-up">
          <div className="section-header">
            <p style={{ color: "yellow" }}>About</p>
          </div>
          <div className="about-descr">
            <p className="p-heading">
              Explore the world like never before, discovering hidden gems and
              iconic landmarks with unparalleled insights.
            </p>
            <p className="separator">
              Dive into a treasure trove of relevant information about each
              destination, complete with engaging videos and honest reviews to
              give you a deep, authentic understanding. Our comprehensive guides
              include links to relevant websites, ensuring you have everything
              you need at your fingertips.
            </p>
            <p className="separator">
              Start your journey today and see where Hairyblo takes you!
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
