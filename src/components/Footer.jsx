import {IconArrowUp} from '@tabler/icons-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <p>linkeidn</p>
          </a>
          <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <p>github</p>
          </a>
        </div>
        
        <button className="back-to-top" onClick={scrollToTop}>
          <IconArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer