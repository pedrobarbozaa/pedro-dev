import Navbar from "./Navbar";
import cogIcon from '../assets/cog.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <a href="" className="logo-wrapper">
          <img className="logo" src={cogIcon} alt="page-logo"></img>
          <p className="logo-name">Pedro Barboza</p>
        </a>
        <Navbar></Navbar>
      </div>
    </header>
  )
};

export default Header
