import "./AnticFooter.css";

const AnticFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>antic</h2>
        </div>
        <div className="footer-nav">
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>Furniture</li>
              <li>Decoration</li>
              <li>Storage</li>
              <li>Baby and child</li>
              <li>Connected home</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Rooms</h3>
            <ul>
              <li>Living room</li>
              <li>Dining room</li>
              <li>Cooked</li>
              <li>Bedroom</li>
              <li>Bathroom</li>
              <li>Office</li>
              <li>Laundry</li>
              <li>Garage</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Click and collect</li>
              <li>Conception</li>
              <li>Installation</li>
              <li>Advices</li>
              <li>Gift card</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>Our story</li>
              <li>Our stores</li>
              <li>Our partners</li>
            </ul>
          </div>
        </div>
        <div className="footer-planet">
          <h3>We respect our planet</h3>
          <img src="/path-to-your-image.jpg" alt="Sustainable interior" />
          <p>
            We are taking positive steps to reduce our impact on the planet. For
            us, that means retailing responsibly.
          </p>
          <a href="#" className="learn-more">
            Learn more &gt;
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="icon-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="icon-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="icon-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="icon-instagram"></i>
          </a>
        </div>
        <div className="copyright">
          <p>
            Copyright, 2024. Coded by{" "}
            <a
              href="https://www.linkedin.com/in/ronygrafo/?locale=en_US"
              target="_blank"
              rel="noopener"
            >
              {" "}
              @ronygrafo{" "}
            </a>{" "}
            for PurpleFire Frontend Developer Challenge
          </p>
        </div>
        <div className="legal-links">
          <a href="#">Privacy policy</a>
          <a href="#">Term of service</a>
          <a href="#">Language</a>
        </div>
      </div>
    </footer>
  );
};

export default AnticFooter;
