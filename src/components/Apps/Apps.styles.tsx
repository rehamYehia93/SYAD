
import { Box, styled } from '@mui/material';
  
const StyledBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to bottom, #ffffff 0%, #F4F1ED 100%)',
  margin: theme.spacing(8, 0),
  '& .ABG':{
    width: "100%",
    height: "100%",
    objectFit: "contain", 
    maxHeight: theme.spacing(56.5),
    [theme.breakpoints.down("md")]: {
        height: theme.spacing(30.625),
      },
  },
  '& .ATextGrid': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  '& .MuiContainer-root': {
    height: '100%',
  },
  '& .MuiGrid-container': {
    height: '100%',
    alignItems: 'center', 
  },
  '& .AAppBtnsSection':{
    [theme.breakpoints.down("md")]: {
      justifyContent: 'center',
    },
  },
  '& .AAppBtnsContainer':{
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  '& .AAppBtns': {
    objectFit: "contain", 
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(16.7),
      width: theme.spacing(14.5),
    },
  },
}));
export default StyledBox;
