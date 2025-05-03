
import { Box, styled } from '@mui/material';
  
const StyledBox = styled(Box)(({ theme }) => ({
    textAlign:'center',
    margin: theme.spacing(4, 0),
'& .carousel-container ':{
    padding:theme.spacing(1.5, 0),
    },

    '& .carousel-item': {
    padding:theme.spacing(0, 2),
    },
   '& .react-multi-carousel-item': {
        '&:not(.react-multi-carousel-item--active)': {
            opacity: '0.7', 
            transform: 'scale(0.95)',
        },
      },
 '& .ServiceBox':{
    border: `1px dashed ${theme.palette.divider}`,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1),
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    flexDirection: 'column',
    gap:theme.spacing(1),
    width: '100%',
    position:'relative',
 },
 '& .SIcon':{
    position: 'absolute',
    top:theme.spacing(1),
    left:theme.spacing(1),
    '&.SIconFav':{
        color:'gold'
    },
    '&.SEnIcon':{
        left:'unset',
        right:theme.spacing(1),
    },
 },
}));
export default StyledBox;
