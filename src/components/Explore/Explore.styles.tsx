
import { Box, styled } from '@mui/material';
  
const StyledBox = styled(Box)(({ theme }) => ({
    margin: theme.spacing(8, 0),
  '& .EBG':{
    width: "100%",
    height: "100%",
    objectFit: "contain", 
    maxHeight: theme.spacing(56.5),
    [theme.breakpoints.down("md")]: {
        height: theme.spacing(30.625),
      },
  },
}));
export default StyledBox;
