import "./Hero.css";
import heroVid from "../../assets/img/hairyblo.mp4";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="video_contain">
          <video preload="true" autoPlay muted loop id="video_background">
            <source src={heroVid} type="video/mp4" />
          </video>
        </div>
        <div className="hero-content">
          <p>Travel Smarter, Experience Deeper!</p>

          <ul className="list-unstyled list-social">
            <li>
              <a href=" ">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
