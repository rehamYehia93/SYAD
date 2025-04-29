
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  Typography, 
  Avatar,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledDrawer from './UserDrawer.styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';

const UserDrawer = (props) => {
 const {user, navigationItems, language, handleLanguageChange, toggleDrawer, drawerOpen, isActive}= props;
  const { t } = useTranslation();

  return (
    <StyledDrawer
      anchor={language === 'ar' ? 'right' : 'left'}
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        className="UDMenuContianer"
        sx={{ width: 250 }}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* top section */}
        <Box>
            <Box className="UDHeader">
                <Typography component="p" variant='h6'>{t('nav.menu')}</Typography>
                <CloseIcon fontSize="small" />
            </Box>
            <List>
            {navigationItems.map((item) => (
                <ListItem key={item.id} disablePadding className="UDListItem">
                <ListItemButton 
                    className={`UDListBtn ${isActive(item.link) ? 'UDActiveBtn' : ''}`}
                    component={Link} 
                    to={item.link}
                >
                    <ListItemText primary={item.text} />
                </ListItemButton>
                </ListItem>
            ))}
            
            </List>
        </Box>
           {/* bottom section */}
           <Box>
                { user&& (
                    <Box display="flex" alignItems="center">
                        <Avatar 
                        src={user.avatar} 
                        alt={user.name}
                        sx={{ mx: 1 }}
                        />
                        <Typography>
                        {user.name}
                        </Typography>
                    </Box>
                )}
                <Box className="UDBtnsContainers">
                    <Button variant="contained" color="secondary" size="small" startIcon={ <AppsIcon />}>
                        {t('nav.apps')}
                    </Button>
                    <Button variant="contained"  color="secondary" size="small" startIcon={ <NotificationsIcon />}>
                        {t('nav.notifications')}
                    </Button>
                    <Button onClick={() => handleLanguageChange(language === 'en' ? 'ar' : 'en')} 
                            variant="contained" 
                            color="secondary"
                            size="small"
                            startIcon={ <LanguageIcon />}
                            >
                        {language === 'en' ? 'العربيه ' : 'English'} 
                    </Button>
                </Box>
           </Box>
      </Box>
    </StyledDrawer>
  );
};

export default UserDrawer;
