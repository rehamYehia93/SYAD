
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { plants } from '../../data/plants';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  TextField, 
  InputAdornment,
  Tabs,
  Tab
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StyledBox from './Plants.styles';
import Breadcrumbs from '../../components/BreadCrump';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Plants = () => {
  const { t } = useTranslation();
    const { language } = useLanguage();
    const [value, setValue] = React.useState(0);
  const [searchQuery, setSearchQuery] = useState('');
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
 
  
  const breadCrumpData=[
    {id: 1,
      text: t('nav.home'),
      link:'/'
    },
    { id: 2,
      text: t('nav.evidence'),
    },
  ];

  const filteredPlants = plants.filter(plant => 
    plant.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.description[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (   
  
  <StyledBox>
      <Breadcrumbs links={breadCrumpData} />
      <Container maxWidth="xl" sx={{ py: 2 }}>
            <Box >
              <Box >
                <Tabs value={value} onChange={handleChange} className="ETabs">
                  <Tab label={t('evidence.evidences')} id='simple-tabpanel-0' className="ETab" />
                  <Tab label={t('evidence.references')} id='simple-tabpanel-1' className="ETab" />
                </Tabs>
              </Box>
       <CustomTabPanel value={value} index={0}>
                     <Grid container></Grid>
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('plants.searchPlaceholder')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>
        
        <Grid container spacing={4}>
          {filteredPlants.map((plant) => (
            <Grid item key={plant.id} xs={12} sm={6} md={4}>
              <Card 
                component={Link} 
                to={`/plants/${plant.id}`}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={plant.images[0]}
                  alt={plant.name[language]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {plant.name[language]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plant.description[language].length > 40 
                      ? `${plant.description[language].substring(0, 40)}...` 
                      : plant.description[language]
                    }
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p">
                    {plant.location[language]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {filteredPlants.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6">
              No plants found matching your search.
            </Typography>
          </Box>
        )}
      </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <Box>
                    {/* {references.map((reference)=>(
                        <Typography key={reference.id}>
                        {language === 'en' ?reference.text.en: reference.text.ar}
                        </Typography>
                    ))} */}
                    will add revrances 
                    </Box>
                  </CustomTabPanel>
              </Box>
          </Container>
        </StyledBox>
  );
};

export default Plants;
