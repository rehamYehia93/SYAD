import React from 'react';
import { Box, Container, IconButton, Typography, Button } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import StyledBox from './Services.styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface SERVICES {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  image:string;
  is_favorite:boolean;
}

interface SERVPROPS {
  services: SERVICES[];
}



const Services: React.FC<SERVPROPS> = ({ services }) => {
  const { language } = useLanguage();
   const { t } = useTranslation();
  const isRTL = language === 'ar';
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40 // adds space between items
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    },
  };
  return (
    <StyledBox>
      <Container maxWidth="xl">
        <Typography component="h2" variant="h5" mb={3} color="primary">
          {t('home.services.title')}
        </Typography>
      <Carousel
        partialVisible={true} 
        centerMode={false}
        swipeable
        infinite={false}
        keyBoardControl
        responsive={responsive}
        showDots={false}
        arrows={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        rtl={isRTL}
        >
        {services.map((service) => (
        <Box key={service.id} className="ServiceBox">
            {service.name[language]}
            <img src={service.image} alt={service.name["en"]} width="107" height="107" />
            <IconButton 
                className={`SIcon ${service.is_favorite ? 'SIconFav':''} ${isRTL? '':'SEnIcon'}`}
                size="small"
              >
                {service.is_favorite ? (
                  <StarIcon fontSize="small" />
                ) : (
                  <StarOutlineIcon fontSize="small" />
                )}
              </IconButton>
        </Box>
        ))}
      </Carousel>
      <Button variant="text"   
        component={Link} 
         to="/services" >{t('home.services.button_text')}</Button>
      </Container>
    </StyledBox>
  );
};

export default Services;