import { MaterialSymbol } from 'react-material-symbols'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-content">
        <div className="categories-button">
          <MaterialSymbol
            icon={"list"}
            size={20}
            grade={0}
            weight={400}
            color={"##fff"}
            fill={true}
          />
          All Categories
          <MaterialSymbol
            icon={"arrow_drop_down"}
            size={24}
            grade={0}
            weight={400}
            color={"##fff"}
            fill={true}
          />
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#product" className="active">
              PRODUCT
            </a>
          </li>
          <li>
            <a href="#pages">PAGES</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        <div className="contact-info">
          <MaterialSymbol
            icon={"headphones"}
            size={48}
            grade={0}
            weight={400}
            color={"#E73C17"}
            fill={true}
          />
          <div className="contact-text">
            <span>CONTACT US 24/7</span>
            <strong>+12012987481</strong>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar