import Navsection from "./Navsection";

const Navbar = ({ isMenuOpen }) => {
  const navItems = [
    { section: "Home", href: "#home" },
    { section: "Sobre", href: "#sobre" },
    { section: "Projetos", href: "#projetos" },
    { section: "Contato", href: "#contato" }
  ];

  return (
    <>
      {/* Navbar Desktop */}
      <nav className="desktop-nav">
        <ul>
          {navItems.map((item, index) => (
            <Navsection 
              key={index}
              section={item.section}
              href={item.href}
            />
          ))}
        </ul>
      </nav>

      {/* Navbar Mobile */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map((item, index) => (
            <Navsection 
              key={index}
              section={item.section}
              href={item.href}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;