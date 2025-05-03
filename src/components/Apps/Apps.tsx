import React from 'react';
import { Box, Container, Stack, Typography, Grid , Button} from '@mui/material';
import StyledBox from './Apps.styles';
import { useTranslation } from 'react-i18next';




const Apps= () => {
   const { t } = useTranslation();
  return (
    <StyledBox>
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container sx={{ minHeight: '500px' }}> 
        <Grid item lg={7} md={6} xs={12}> 
          <img 
            src="public/images/phones.png" 
            alt={t('home.statistics.title')} 
            className="ABG"
            style={{ height: '100%' }} 
          />
        </Grid>
        <Grid item lg={5} md={6} xs={12} className='ATextGrid' sx={{ 
          py: 3, // Add vertical padding
          height: '100%' // Ensure full height
        }}>
          <Typography component="h2" variant="h4" my={3} color="primary">
            {t('home.apps.title')}
          </Typography>
          <Typography component="b" variant="body1" mb={3} color="secondary">
            {t('home.apps.desc')}
          </Typography>
          <Stack direction="row" spacing={3} mt={3} className='AAppBtnsSection'>
              <Box 
                component="a"
                href="/"
                download
                className='AAppBtnsContainer'
              >
                <img 
                  src="public/images/appstore.png" 
                  alt={t('home.statistics.title')} 
                  className="AAppBtns"
                  width="180"
                  height="50"
                />
              </Box>
              <Box 
                component="a"
                href="/"
                download
                className='AAppBtnsContainer'
              >
                <img 
                src="public/images/googleplay.png" 
                alt={t('home.statistics.title')} 
                className="AAppBtns"
                width="180"
                height="50"
                />
              </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </StyledBox>
  );
};

export default Apps;