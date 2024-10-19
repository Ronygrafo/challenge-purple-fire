import { MaterialSymbol } from 'react-material-symbols'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer full-width">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.</p>
          <div className="social-icons">
            <MaterialSymbol icon={"public"} size={24} grade={0} weight={400} color={"#fff"} />
            <MaterialSymbol icon={"public"} size={24} grade={0} weight={400} color={"#fff"} />
            <MaterialSymbol icon={"public"} size={24} grade={0} weight={400} color={"#fff"} />
            <MaterialSymbol icon={"public"} size={24} grade={0} weight={400} color={"#fff"} />
          </div>
        </div>
        
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li>About</li>
            <li>Delivery information</li>
            <li>Privacy Policy</li>
            <li>Sales</li>
            <li>Terms & Conditions</li>
            <li>EMI Payment</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>ACCOUNT</h3>
          <ul>
            <li>My Account</li>
            <li>My Orders</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Wishlist</li>
            <li>Account Details</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>STORE</h3>
          <ul>
            <li>Affiliate</li>
            <li>Discounts</li>
            <li>Sale</li>
            <li>Contact</li>
            <li>All Collections</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>If you have any query, please contact us</p>
          <p className="contact-email">needus24@gmail.com</p>
          <p> <MaterialSymbol icon={"location_on"} size={24} grade={0} weight={400} color={"#fff"} /> California, USA</p>
          <p> <MaterialSymbol icon={"phone_iphone"} size={24} grade={0} weight={400} color={"#fff"} /> +1 2012987481</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright, 2024. Coded by  <a href="https://www.linkedin.com/in/ronygrafo/?locale=en_US" target='_blank' rel='noopener'> @ronygrafo </a>  for PurpleFire Frontend Developer Challenge</p>
      </div>
    </footer>
  )
}

export default Footer