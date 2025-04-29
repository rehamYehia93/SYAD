
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { plants } from '../data/plants';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  Button, 
  MobileStepper
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language, direction } = useLanguage();
  
  const plant = plants.find(p => p.id === id);
  
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = plant?.images.length || 0;
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  if (!plant) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Plant not found
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/plants')}
          startIcon={<ArrowBackIcon />}
        >
          Back to Plants
        </Button>
      </Container>
    );
  }
  
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button 
        variant="outlined" 
        startIcon={direction === 'ltr' ? <ArrowBackIcon /> : null}
        endIcon={direction === 'rtl' ? <ArrowBackIcon /> : null}
        onClick={() => navigate('/plants')}
        sx={{ mb: 4 }}
      >
        {t('nav.plants')}
      </Button>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography>{`${activeStep + 1} / ${maxSteps}`}</Typography>
            </Paper>
            <Box
              component="img"
              sx={{
                height: 400,
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                width: '100%',
                objectFit: 'cover',
              }}
              src={plant.images[activeStep]}
              alt={plant.name[language]}
            />
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {direction === 'ltr' ? 'Next' : 'السابق'}
                  {direction === 'ltr' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
              backButton={
                <Button 
                  size="small" 
                  onClick={handleBack} 
                  disabled={activeStep === 0}
                >
                  {direction === 'ltr' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                  {direction === 'ltr' ? 'Back' : 'التالي'}
                </Button>
              }
            />
          </Box>
          
          <Typography variant="h6" sx={{ mt: 2 }}>
            {t('plantDetails.gallery')}
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {plant.images.map((image, index) => (
              <Grid item xs={3} key={index}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: 80,
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: index === activeStep ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                  }}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveStep(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {plant.name[language]}
          </Typography>
          
          <Typography variant="body1" paragraph>
            {plant.description[language]}
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
        
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlantDetails;
