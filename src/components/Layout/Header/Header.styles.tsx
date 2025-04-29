
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

interface StyledAppBarProps {
    leftDir?: boolean;
    transparent?: boolean; // Add new prop for transparency
  }
  
  const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'leftDir' && prop !== 'transparent',
  })<StyledAppBarProps>(({ theme, leftDir, transparent }) => ({
    position: 'fixed',
    padding: theme.spacing(2.625, 0),
    // Conditional transparent background
    backgroundColor: transparent ? 'transparent' : theme.palette.primary.main,
    boxShadow: transparent ? 'none' : theme.shadows[4], 
 
    '& .HIconBtn': {
        border: `1px solid ${theme.palette.common.white}`,
    },
    '& .HNotificationCount':{
        top:  "-12px",
        right: leftDir?  theme.spacing(-4) : theme.spacing(4),
    },
    '& .HToolBar':{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& .HSide':{
        display: 'flex',
        alignItems: 'center',
    },
    '& .HIconsContianers':{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing(3),
        margin: theme.spacing(0, 2),
    },
    '& .HLGNavigatorLinks':{
        fontSize: theme.spacing(2),
        transition: "all 0.2s ease-in-out",
        margin: theme.spacing(0, 1),
        borderBottom: '1px solid transparent',
        [theme.breakpoints.down("xl")]: {
            fontSize: theme.spacing(1.75),
        },
    '&:hover, &.HActiveLink': {
        borderBottom: `1px solid ${theme.palette.common.white}`,
        borderRadius: 0,
        fontWeight:'bold',
    },
    },                  
}));
export default StyledAppBar;
