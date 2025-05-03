
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { plants } from '../../data/plants';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Breadcrumbs from '../../components/BreadCrump';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StyledBox from './PlantDetails.styles';

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const plant = plants.find(p => p.id === id);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const breadCrumpData=[
    {id: 1,
      text: t('nav.home'),
      link:'/'
    },
    { id: 2,
      text: t('nav.evidence'),
       link:'/evidence'
    },
    { id: 3,
      text: plant.name[language]
    },
  ];

  if (!plant) {
    return (
      <StyledBox>
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
        
          {t('plantDetails.not_found')}
        </Typography>
        <Button 
          className="PDBackBtn"
          variant="contained" 
          onClick={() => navigate('/plants')}
          startIcon={language === "en" && <ArrowBackIcon />}
          endIcon={language === "ar" && <ArrowBackIcon />}
        >
          {t('plantDetails.back')}
        </Button>
      </Container>
      </StyledBox>
    );
  }
  
  return (
    <StyledBox>
    <Breadcrumbs links={breadCrumpData} />
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container width="100%">
        <Grid item lg={9} md={12} xs={12}>
        <Box
              component="img"
             className="PDGalleryView"
              src={plant.images[activeStep]}
              alt={plant.name[language]}
            />
        </Grid>
        <Grid item lg={3} md={12} xs={12}>
        <Grid container spacing={1}>
            {plant.images.map((image, index) => (
              <Grid item xs={isTablet ? 3 : 12 } key={index}>
                <Box
                  className='PGGalleryThum'
                  component="img"
                  sx={{
                    border: index === activeStep ? '2px solid' : 'none',
                  }}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveStep(index)}
                />
              </Grid>
            ))}
          </Grid>
          </Grid>
      </Grid>
          <Typography variant="h4" component="h1" gutterBottom mt={3}>
            {plant.name[language]}
          </Typography>
          <Typography variant="body1" paragraph>
            {plant.description[language]}
          </Typography>
    </Container>
    </StyledBox>
  );
};

export default PlantDetails;
