import { useState, useEffect } from 'react';
import { Zoom } from '@mui/material';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import StyledFab from './ScrollToTopButton.styles';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <StyledFab
        onClick={scrollToTop}
        aria-label="scroll to top"
      >
        <ChangeHistoryIcon />
      </StyledFab>
    </Zoom>
  );
};

export default ScrollToTopButton;