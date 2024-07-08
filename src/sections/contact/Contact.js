import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div
          className="contact-div row"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="contact-div-left col-lg-4">
            <h2>
              Hairyblo
              <img src="assets/img/hairybloLogo.png" alt="" />
            </h2>

            <p>Travel Smarter, Experience Deeper!</p>

            <div className="socials">
              <ul className="list-unstyled list-social">
                <li>
                  <a href="https://www.facebook.com/wildnowfoundation">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/WildnowF">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/wildnowfoundation/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCOwyOyK5LqLbR9byJWxzT1w">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="form col-lg-4">
            <form action="">
              <label htmlFor=""> Name</label>
              <br />
              <input type="text" placeholder="Name" />
              <label htmlFor=""> Subject</label>
              <br />
              <input type="text" placeholder="Subject" />
              <label htmlFor=""> Message</label>
              <br />
              <textarea name="" id="" rows="3"></textarea>
              <hr />

              <input
                className="submit-input"
                type="submit"
                placeholder="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
