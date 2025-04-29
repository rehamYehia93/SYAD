import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { text } from 'stream/consumers';

const StyledBox = styled(Box)(({ theme }) => ({
borderTop: `1px solid ${theme.palette.divider}`,
padding : theme.spacing(6, 0),
color: theme.palette.secondary.light,
[theme.breakpoints.down('lg')]: {
    padding : theme.spacing(2, 0),
},
'& .FLinksGroupTitle': {
    borderBottom: `3px solid transparent`,
    borderImage: `linear-gradient(to right, ${theme.palette.common.white}, ${theme.palette.primary.main}) 1`,
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2.25),
    fontWeight: 700,
    marginBottom: theme.spacing(1),
},
'& .FLink':{
    color: theme.palette.secondary.light,
    padding: 0,
    display: 'block',
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(2),
},
'& .FCopyRight':{
    width:'100%',
    textAlign:'center',
    paddingTop: theme.spacing(6),
    marginTop: theme.spacing(6),
    borderTop: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('lg')]: {
        paddingTop: theme.spacing(2),
        marginTop: theme.spacing(2),
    },

},
'& .MuiGrid-item':{
    padding: theme.spacing(2, 0),
},
}));
export default StyledBox;
