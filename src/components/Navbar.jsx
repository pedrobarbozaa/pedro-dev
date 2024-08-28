import Navsection from "./Navsection";

const Navbar = () => {
  return (
    <nav>
      <Navsection section="Home"></Navsection>
      <Navsection section="Sobre"></Navsection>
      <Navsection section="Projetos"></Navsection>
      <Navsection section="Contato"></Navsection>
    </nav>
  )
};

export default Navbar
