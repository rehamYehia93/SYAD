
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

// Hero section image
const StyledBox = styled(Box)(({ theme }) => ({
  height: '2000px',
  '& .test' :{
    height: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'black',
  }
}));

const Home = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <Box className="test"></Box>
          <Typography variant="h2" component="h1" gutterBottom>
            {t('home.hero.title')}
          </Typography>
    </StyledBox>
  );
};

export default Home;
