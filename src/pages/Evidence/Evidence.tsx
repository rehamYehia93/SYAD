
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { evidences,  references} from '../../data/evidence';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Tabs,
  Tab
} from '@mui/material';
import StyledBox from './Evidence.styles';
import Breadcrumbs from '../../components/BreadCrump';
import { Link } from 'react-router-dom';



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

const Evidence = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [value, setValue] = React.useState(0);
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
                <Grid container>
                {evidences.map((evidence)=>(
                  <Grid item lg={3} md={4} sm={6} xs={12} key={evidence.id}>
                    <Box className="ECard" component={Link} to={evidence.link}>
                      <Box className="EImgContainer">
                        <img src={evidence.image} alt={evidence.title.en} className="EImage" />
                      </Box>
                    <Typography component="p" variant="body1">
                    {language === 'en' ?evidence.title.en: evidence.title.ar}
                    </Typography>
                    </Box>
                   </Grid> 
                ))}
                </Grid>
              <Box>
              </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              <Box>
                {references.map((reference)=>(
                    <Typography key={reference.id}>
                    {language === 'en' ?reference.text.en: reference.text.ar}
                    </Typography>
                ))}
                </Box>
              </CustomTabPanel>
          </Box>
      </Container>
    </StyledBox>
  );
};

export default Evidence;
