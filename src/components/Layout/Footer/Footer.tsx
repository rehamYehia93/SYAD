
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import StyledBox from './Footer.styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
 const socialMediaLinks = [
  { id:1,
  icon: <YouTubeIcon />,
  link:'/',
  },
  { id:2,
    icon: <FacebookRoundedIcon />,
    link:'/',
  },
  { id:3,
    icon: <InstagramIcon />,
    link:'/',
  },
  { id:4,
    icon: <LinkedInIcon />,
    link:'/',
  },
  { id:5,
    icon: <TwitterIcon />,
    link:'/',
    },
];

  return (
    <StyledBox component="footer">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6} lg={3} xl={2.4}>
          <Button component={Link} to="/" >
            <img src='/public/logos/primary-logo.png' alt="logo" height="48px"/>
          </Button>
          <Typography variant='body1' component='p' mt={3}>
            {t('footer.footer_caption')}
          </Typography>
          </Grid>
          

          <Grid item xs={12} md={6} lg={3} xl={2.4}>
            <Typography variant="h6" className='FLinksGroupTitle'>
              {t('footer.important_links')}
            </Typography>
            
            <Box className='FLinksGroup'>
              <Button className='FLink' component={Link} to="/">
                {t('footer.national_center')}
              </Button>
              <Button className='FLink' component={Link} to="/">
                {t('footer.national_center')}
              </Button>
              <Button className='FLink' component={Link} to="/">
                {t('footer.national_center')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={2.4}>
            <Typography variant="h6" className='FLinksGroupTitle'>
              {t('footer.geospatial_portal')}
            </Typography>
            <Box className='FLinksGroup'>
              <Button className='FLink' component={Link} to="/">
                {t('footer.vision')}
              </Button>
              <Button className='FLink' component={Link} to="/">
                {t('footer.vision')}
              </Button>
              <Button className='FLink' component={Link} to="/">
                {t('footer.vision')}
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3} xl={2.4}>
            <Typography variant="h6" className='FLinksGroupTitle'>
              {t('footer.contact_us')}
            </Typography>
            <Box className='FLinksGroup'>
              <Button className='FLink' component={Link} to="/">
                {t('footer.contact_us')}
              </Button>
              <Button className='FLink' component={Link} to="/">
                {t('footer.contact_us')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={2.4}>
            <Typography variant="h6" className='FLinksGroupTitle'>
              {t('footer.social_media')}
            </Typography>
            <Box className='FLinksGroup'>
              {socialMediaLinks.map((item)=>(
                <IconButton  
                  key={item.id}
                  component={Link} to={item.link}
                  className="HIconBtn" 
                  color="inherit"
                        >
                  {item.icon}
                </IconButton>
              ))}
             
            </Box>
          </Grid>
          
        </Grid>
        <Typography variant="body1" className='FCopyRight'>
             {t('footer.rights', { year: currentYear })}
          
        </Typography>
      </Container>
    </StyledBox>
  );
};

export default Footer;
