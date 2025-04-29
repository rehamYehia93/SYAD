import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { text } from 'stream/consumers';

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 0),
    position:'relative',
    '& .BCBg':{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        objectFit: 'cover',
    
    },
'& .BCList':{
    display:'flex', 
    alignItems: 'center',
    gap: theme.spacing(1),
    '& .BCListItem':{
       width: 'fit-content',
       padding: 0,
       '& a':{
        textDecoration: 'none',
        color: theme.palette.secondary.light,
       }
    },
    '& .BLable':{
        fontWeight: 700,
        color: theme.palette.primary.main,
    },
},

}));
export default StyledBox;
