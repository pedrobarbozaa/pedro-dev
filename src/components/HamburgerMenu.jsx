import { useState, useEffect } from 'react';

const HamburgerMenu = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (!mobile && isOpen) {
        setIsOpen(false);
        if (onToggle) onToggle(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isOpen, onToggle]);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
        if (onToggle) onToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, isOpen, onToggle]);

  // Expor método global para fechar menu
  useEffect(() => {
    window.closeHamburgerMenu = () => {
      setIsOpen(false);
      if (onToggle) onToggle(false);
    };
  }, [onToggle]);

  return (
    <div className="mobile-menu-container">
      <button 
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => {
          setIsOpen(false);
          if (onToggle) onToggle(false);
        }}
      />
    </div>
  );
};

export default HamburgerMenu;
