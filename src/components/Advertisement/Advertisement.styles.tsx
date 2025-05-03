
import { Box, styled, keyframes } from '@mui/material';


// Create the scrolling animation
const scrollLTR = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
`;

const scrollRTL = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(50%); }
`;

interface StyledBoxProps {
    RTL?: boolean;
  }
  
  const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'RTL',
  })<StyledBoxProps>(({ RTL, theme }) => ({
    width: '100%',
    overflow: 'hidden',
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(2, 0),
    whiteSpace: 'nowrap',
    direction: 'inherit', // Inherits from parent or language context
    '& .AScrollingContent':{
        display: 'inline-block',
        animation: `${RTL ? scrollRTL : scrollLTR} 20s linear infinite`,
        paddingRight: RTL ? 0 : '20px',
        paddingLeft: RTL ? '20px' : 0,
        '&:hover': {
            animationPlayState: 'paused',
            cursor: 'default'
        }
    },
}));
export default StyledBox;
