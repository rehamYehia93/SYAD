
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Hero from '../components/Hero';
import { kpis ,adds, services, statistics} from '../data/home';
import Advertisement  from '../components/Advertisement';
import Services from '../components/Services';
import Statistics from '../components/Statistics';
import Explore from '../components/Explore';
import Apps from '../components/Apps';

// Hero section image

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Hero data ={kpis} />
      <Advertisement adds= {adds}/>
      <Services services={services} />
      <Statistics statistics={statistics} />
      <Explore />
      <Apps />
    </Box>
  );
};

export default Home;
