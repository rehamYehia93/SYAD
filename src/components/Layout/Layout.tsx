import React, { useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]); 

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <ScrollToTopButton />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          paddingTop: isHomePage ? 0 : 12
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;