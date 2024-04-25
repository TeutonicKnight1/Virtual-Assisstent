import { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={showButton}>
      <Fab onClick={scrollToTop} sx={{ position: 'fixed', bottom: 40, right: 40 }}>
        <ArrowUpwardIcon color='#5068F2' />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;