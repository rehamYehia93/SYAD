import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    color: theme.palette.secondary.main,
  '& .PDBackBtn':{
    '& .MuiButton-icon':{
        margin: theme.spacing(0, 0.5),
    },
  },
  '& .PDGalleryView':{
       height: theme.spacing(56.25),
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
        objectFit: 'cover',
        borderRadius: theme.spacing(1),
        [theme.breakpoints.down("lg")]: {
            height: theme.spacing(40),
            
        },
  },
  '& .PGGalleryThum':{
    height: theme.spacing(17.5),
    width: theme.spacing(17.5),
    margin: theme.spacing(0, 3),
    objectFit: 'cover',
    cursor: 'pointer',
    borderColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("lg")]: {
        width: '100%',
        margin:theme.spacing(1, 1, 0, 1),
        height: theme.spacing(12),
    },
  }
  }));
  export default StyledBox;