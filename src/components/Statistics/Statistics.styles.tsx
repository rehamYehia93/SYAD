
import { Box, styled } from '@mui/material';
  
const StyledBox = styled(Box)(({ theme }) => ({
    textAlign:'center',
    position: "relative",
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #F4F1ED 50%, #FFFFFF 100%)',
    padding : theme.spacing(6, 0),
    margin: theme.spacing(4, 0),
    '& .SBG':{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover", 
        zIndex: 1,
    },
    '& .SContainer':{
        position: "relative",
        zIndex: 2,
        width: "100%",
        height: "100%",
    },
    '& .SCounterBox':{
        padding: theme.spacing(3),
        textAlign: 'center',
        height: '100%',
    },
    '& .SNumber':{
        color:'#EDC455',
        fontWeight: 700,
    },
}));
export default StyledBox;
