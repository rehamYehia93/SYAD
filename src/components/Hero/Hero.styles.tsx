import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: theme.palette.grey[900],
 '& .HVido':{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", 
    zIndex: 1,
 },
'& .HContentWrapper':{
    position: "relative",
    
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    padding: theme.spacing(20, 2, 20, 2),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(10, 2, 10, 2),
      },
},
'& .HTabs':{
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRight:0,
    padding:theme.spacing(2, 0, 1, 0),
    width:'auto',
    minWidth:'unset',
    fontSize: theme.spacing(2),
    '&.Mui-selected':{
        borderBottom: `1px solid ${theme.palette.primary.main}`,  
        fontWeight:'700',
    },
   
},
'& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-fixed':{
    flex:'unset',
    marginTop: 'auto',
  },

'& .HStatiscicsContainer':{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      gap: theme.spacing(1),
      '& .MuiTypography-root':{
      fontSize: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2),
      },
    },
    '& img':{
        [theme.breakpoints.down("md")]: {
            height: theme.spacing(7),
          },  
    },
},
}));
export default StyledBox;
