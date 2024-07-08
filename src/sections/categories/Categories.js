import { Link } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
  return (
    <section id="destinations" className="categories">
      <div className="content row">
        <div className="left col-lg-4">
          <div className="merch-content mt-4">
            <h2>Culture and Heritage</h2>
          </div>
          <Link
            to={"/destinations/culture-and-heritage"}
            state={{ id: 0 }}
            className="inner-div"
          ></Link>
        </div>
        <div className="middle col-lg-3">
          <Link
            to={"/destinations/nature-and-adventure"}
            state={{ id: 1 }}
            className="inner-div"
          ></Link>

          <div className="merch-content mt-4">
            <h2>Nature and Adventure</h2>
          </div>
        </div>
        <div className="right col-lg-5">
          <div className="right-top">
            <Link
              to={"/destinations/urban-exploration"}
              state={{ id: 2 }}
              className="inner-div"
            ></Link>
            <div className="merch-content">
              <h2>Urban Exploration</h2>
            </div>
          </div>
          <div className="right-bottom">
            <div className="merch-content">
              <h2>Relaxation and Wellness</h2>
            </div>
            <Link
              to={"/destinations/relaxation-and-wellness"}
              state={{ id: 3 }}
              className="inner-div"
            ></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
