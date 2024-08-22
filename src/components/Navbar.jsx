import Navsection from "./Navsection";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Navsection section="Sobre"></Navsection>
            <Navsection section="Projetos"></Navsection>
            <Navsection section="Contato"></Navsection>
        </ul>
    </nav>
  )
};

export default Navbar
