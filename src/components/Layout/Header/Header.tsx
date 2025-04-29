
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Avatar, 
  Box, 
  Menu, 
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import StyledAppBar from './Header.styles';
import UserDrawer from '../UserDrawer';

const Header = () => {
  const { t } = useTranslation();
  const user = {
    avatar:'/public/images/user.png' ,
    name:'محمد العزاز',
    notificationsCount:3,
  }
  const { language, setLanguage } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    handleMenuClose();
  };
  // to check the active page 
  const isActive = (path: string) => {
    return location.pathname === path;
  };
   // to check Home page 
  const isHomePage = location.pathname === '/';


  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
const navigationItems = [
  {id:1 ,
    link:"/",
    text:t('nav.home')
   },
  {id:2 ,
   link:"/about",
   text:t('nav.about')
  },
  {id:3 ,
    link:"/services",
    text:t('nav.services')
   },
   {id:4 ,
    link:"/open-sources",
    text:t('nav.open_sources')
   },
   {id:5 ,
    link:"/gallery",
    text:t('nav.gallery')
   },
   {id:5 ,
    link:"/evidence",
    text:t('nav.evidence')
   },
   
];

useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  if (isHomePage) {
    window.addEventListener('scroll', handleScroll);
  }
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isHomePage, scrolled]);


  return (
    <StyledAppBar leftDir ={language === 'en'}      transparent={isHomePage && !scrolled}
    >
     <Container maxWidth="xl">
      <Toolbar className='HToolBar'>
        {/* Start Side */}
        <Box className="HSide">
        <Button component={Link} to="/" >
          <img src={isTablet? '/public/logos/logo-Light-md.png' : '/public/logos/logo-Light-Lg.png'} alt="logo" height="48px"/>
        </Button>
        {!isTablet && (
          <Box mx={2}>
            {navigationItems.map((item)=>(
              <Button
                   className={`HLGNavigatorLinks ${isActive(item.link) ? 'HActiveLink' : ''}`}
                   key={item.id}
                   component={Link} 
                   to={item.link} 
                   color="inherit"
               >
            {item.text}
            </Button>
         ))}

         </Box>
        )}
        </Box>
        {/* End side */}
        <Box className="HSide">
          {!isTablet && (
            <>
              { user&& (
                <>
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name}
                    sx={{ mx: 1 }}
                  />
                  <Typography>
                  {user.name}
                  </Typography>
                </>
              )}
              <Box className="HIconsContianers">
               <IconButton  
                  className="HIconBtn" 
                    color="inherit"
                    size="large"
                    edge="start">
                    <Badge badgeContent={user.notificationsCount} color="secondary" overlap="circular" className='HNotificationCount' />
                    <NotificationsIcon />
                  </IconButton>
                <IconButton  
                  className="HIconBtn" 
                    color="inherit"
                    size="large"
                    edge="start">
                    <AppsIcon />
                  </IconButton>
                  <IconButton  
                  className="HIconBtn" 
                    color="inherit"
                    size="large"
                    edge="start"
                    onClick={handleLanguageMenuOpen}>
                    <LanguageIcon />
                  </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                      <MenuItem onClick={() => handleLanguageChange('ar')}>العربية</MenuItem>
                    </Menu>
               </Box>
            </>     
          )}
            {isTablet && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                className="HIconBtn"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
             <UserDrawer
                 navigationItems={navigationItems}
                 language={language}
                 handleLanguageChange={handleLanguageChange} 
                 user={user}
                 isActive={isActive}
                 toggleDrawer={toggleDrawer} 
                 drawerOpen={drawerOpen}/>
            </>
          )}
        </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
