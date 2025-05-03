import React from 'react';
import { Box } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import StyledBox from './Advertisement.styles';

interface ADD {
  id: string;
  text: {
    en: string;
    ar: string;
  };
}

interface ADDProps {
  adds: ADD[];
}



const Advertisement: React.FC<ADDProps> = ({ adds }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  return (
    <StyledBox RTL={isRTL}>
      <Box display="inline-block">
        {/* First set of ads (visible) */}
        <Box className="AScrollingContent" >
          {adds.map((add) => (
            <span key={`first-${add.id}`} style={{ 
              marginRight: isRTL ? 0 : '20px',
              marginLeft: isRTL ? '20px' : 0
            }}>
              {add.text[language]} • 
            </span>
          ))}
        </Box>
        {/* Second set of ads (for seamless looping) */}
        <Box className="AScrollingContent" isRTL={isRTL} aria-hidden="true">
          {adds.map((add) => (
            <span key={`second-${add.id}`} style={{ 
              marginRight: isRTL ? 0 : '20px',
              marginLeft: isRTL ? '20px' : 0
            }}>
              {add.text[language]} • 
            </span>
          ))}
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Advertisement;