const Navsection = ({ section, href, onClick }) => {
  const handleClick = () => {
    // Fechar menu mobile ao clicar
    if (window.closeHamburgerMenu) {
      window.closeHamburgerMenu();
    }
    
    // Callback personalizado se fornecido
    if (onClick) {
      onClick();
    }
  };

  // Gerar href automaticamente se não fornecido
  const linkHref = href || `#${section.toLowerCase()}`;

  return (
    <li className="nav-section">
      <a href={linkHref} onClick={handleClick}>
        {section}
      </a>
    </li>
  );
};

export default Navsection;