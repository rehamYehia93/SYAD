import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Stack,
  Fade 
} from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import  StyledBox from './Hero.styles';
import { useTranslation } from 'react-i18next';


interface KPI {
  id: string;
  year: string;
  video: string;
  marine: string;
  wild: string;
}

interface HeroProps {
  data: KPI[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>(
    data.find(item => item.year === "Now")?.id || data[0].id
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };

  const selectedData = data.find(item => item.id === selectedYear) || data[0];

  return (
    <Fade in={true} >
    <StyledBox>
      <video className="HVido"
        autoPlay
        muted
        loop
        key={selectedData.video}
      >
        <source src={selectedData.video} type="video/mp4" />
      </video>
      <Box className="HContentWrapper" component={Container} maxWidth="xxl">
      <Box className="HTabsContent">
          <Stack spacing={3} mt={4}>
            <Box className="HStatiscicsContainer">
                <img alt={t('home.hero.marin_kingdom')} src="public/logos/marin-icon.png" width="auto" height="100px" />
                <Box>
                <Typography > {t('home.hero.marin_kingdom')}</Typography>
                <Typography >
                    {selectedData.marine}
                </Typography>
                </Box>
            </Box>
            <Box className="HStatiscicsContainer">
              <img alt={t('home.hero.marin_kingdom')} src="public/logos/wild-icon.png" width="auto" height="100px" />
              <Box >
                <Typography >{t('home.hero.wild_kingdom')}</Typography>
                <Typography >
                    {selectedData.wild}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Tabs
          orientation="vertical"
          value={selectedYear}
          onChange={handleChange}
          aria-label="Year selection tabs"
        >
          {data.map((item) => (
            <Tab 
            className="HTabs"
              key={item.id} 
              value={item.id} 
              label={item.year} 
              sx={{ color: 'white' }}
            />
          ))}
        </Tabs>

      
      </Box>
    </StyledBox>
    </Fade>
  );
};

export default Hero;