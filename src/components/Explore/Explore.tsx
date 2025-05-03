import React from 'react';
import { Box, Container, IconButton, Typography, Grid } from '@mui/material';
import StyledBox from './Explore.styles';
import { useTranslation } from 'react-i18next';




const Explore= () => {
   const { t } = useTranslation();
  return (
    <StyledBox>
      <Container maxWidth="xl">
      
        <Grid container>
          <Grid item lg={5} md={6} xs={16}>
            <Typography component="h2" variant="h4" mb={3} mt={6} color="primary" >
              {t('home.explore.title')}
            </Typography>
            <Typography component="b" variant="body1" mb={3} color="secondary">
            {t('home.explore.desc')}
            </Typography>
          </Grid>
          <Grid item lg={7} md={6} xs={16}>
            <img src="public/images/explore.png" alt={t('home.statistics.title')} className="EBG"/>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Explore;