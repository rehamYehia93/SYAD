import { styled } from '@mui/material/styles';
import { Fab } from '@mui/material';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
     
}));
export default StyledFab;
