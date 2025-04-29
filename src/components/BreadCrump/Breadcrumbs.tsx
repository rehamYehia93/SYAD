import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import StyledBox from './Breadcrumbs.styles';
import { Link } from 'react-router-dom';
import { Container, Typography , Box} from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

interface BreadcrumbItem {
  id: number; 
  text: string;
  link?: string;
}

interface BreadcrumbsProps {
    links: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { links } = props;
    const { language } = useLanguage();

  return (
    <StyledBox>
        <img src="/public/images/Breadcrump-bg.png" alt="background" height="100%" width="100%" className='BCBg'/> 
   
      <Container maxWidth="xl">
      <List className="BCList">
        {links.map((item, index) => (
          <ListItem
            className="BCListItem"
            key={item.id}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.link ? (
              <Link
                className="BCLink"
                key={item.id}
                to={item.link}
                itemProp="item"
                itemScope
              >
                <Typography variant='body2'>{item.text}</Typography>
              </Link>
            ) : (
              <Typography className='BLable'  variant='body2'>{item.text}</Typography>
            )}
            {index + 1 !== links.length && (
               language === 'en' ? <KeyboardArrowRight className="BCSeparator" />: <KeyboardArrowLeft className="BCSeparator" /> 
            )}
          </ListItem>
        ))}
      </List>
      </Container>
    </StyledBox>
  );
};

export default Breadcrumbs;