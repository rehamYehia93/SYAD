import React, {useRef,useEffect , useState} from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import StyledBox from './Statistics.styles';
import { useTranslation } from 'react-i18next';

 interface STAT {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  number:string;
  prefix?:string;
}

interface CounterProps {
  statistics: STAT[];
}



const Statistics: React.FC<CounterProps> = ( props ) => {
  const {statistics} = props;
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    statistics.map(() => 0)
  );
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const duration = 1000; // 1 second animation

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedValues(prev => 
        statistics.map((stat, index) => 
          Math.floor(progress * parseInt(stat.number))
        )
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [statistics]);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <StyledBox >
      <img src="public/images/Pattern.png" alt={t('home.statistics.title')} className="SBG"/>
      <Container maxWidth="xl" className="SContainer">
      <Typography component="h2" variant="h3" mb={4}>
        {t('home.statistics.title')}
      </Typography>
      
      <Grid container>
        {statistics.map((stat, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={stat.id}>
            <Box className="SCounterBox">
              <Typography variant="h4" className="SNumber" gutterBottom>
                {stat.prefix || ''}{formatNumber(animatedValues[index])}
              </Typography>
              <Typography variant="body1">
                {stat.name[language]}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </StyledBox>
  );
};

export default Statistics;