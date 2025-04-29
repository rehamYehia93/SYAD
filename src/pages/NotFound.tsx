
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      
      <Button 
        variant="contained" 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate('/')}
        size="large"
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
