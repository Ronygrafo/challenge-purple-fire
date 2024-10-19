import { MaterialSymbol } from 'react-material-symbols'
import './Header.css'
const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">Needus<span className="logo-dot">.</span></div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search Products" />
          <div className="search-button">
          <MaterialSymbol icon={"search"} size={24} grade={0} weight={300} color={"#fff"} fill={false}/>
          </div>
        </div>
        
        <div className="categories-dropdown">
          <select>
            <option>All Categories</option>
          </select>
        </div>
        
        <nav className="user-nav">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </nav>
        
        <div className="icons">
        <MaterialSymbol icon={"favorite"} size={24} grade={0} weight={300} color={"#191919"} fill={false}/>
        <MaterialSymbol icon={"shopping_cart"} size={24} grade={0} weight={300} color={"#191919"} fill={false}/>
        </div>
      </div>
    </header>
  )
}

export default Header