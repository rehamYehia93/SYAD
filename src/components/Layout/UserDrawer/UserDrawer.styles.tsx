import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
'& .MuiPaper-root':{
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width:'100vw',

},
'& .UDMenuContianer':{
  width:'100%',
  height:'100%',
  micHeight:'100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
},
'& .UDHeader':{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
'& .UDListItem':{
    '& .UDListBtn': {
        textAlign: 'start',
        borderBottom: `1px solid ${theme.palette.divider}`, 
        
        '&.UDActiveBtn, &:hover': {
            borderBottom: 0, 
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            borderRadius: theme.spacing(0.5),
            fontWeight: 'bold',
        },
    }, 
 '&:last-child': {
    '& .UDListBtn':{
        borderBottom: 0,  
    },
 },
},
'& .UDBtnsContainers':{
    display:'flex',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
    '& .MuiButton-icon':{
        border:` 1px solid ${theme.palette.secondary.main}`,
        borderRadius: '50%',
        padding: theme.spacing(0.5),
        margin: theme.spacing(0, 1),
        '& .MuiSvgIcon-root':{
            fontSize: theme.spacing(1.5),
        },
    },
},
}));
export default StyledDrawer;
