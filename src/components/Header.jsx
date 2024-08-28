import Navbar from "./Navbar";
import cogIcon from '../assets/cog.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={cogIcon} alt="page-logo"></img>
        <Navbar></Navbar>
    </header>
  )
};

export default Header
