
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { plants } from '../../data/plants';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  TextField, 
  InputAdornment,
  Tabs,
  Tab
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StyledBox from './Plants.styles';
import Breadcrumbs from '../../components/BreadCrump';
import PlantCard from '../../components/PlantCard';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

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
            placeholder={t('plants.search_placeholder')}
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
              <PlantCard 
                   navigationLink={`/plants/${plant.id}`}
                   location= {plant.location[language]}
                   name={plant.name[language]}
                   image={plant.images[0]}
                   description={plant.description[language]}
              />
            </Grid>
          ))}
        </Grid>
        
        {filteredPlants.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 , height:400, display:'flex', alignItems:'center', flexDirection:'column',   justifyContent: 'center',  }}>
            <TroubleshootIcon sx={{ fontSize: 100 }}/>
            <Typography variant="h6">
              {t('plants.not_found')}
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
