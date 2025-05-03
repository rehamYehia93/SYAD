import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  CardContent, 
  CardMedia, 
  Typography, 
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { StyledCard } from './PlantCard.styles';

interface PlantProps {
navigationLink: string;
  location: string;
  name: string;
  image: string;
  description: string;
}

const PlantCard = (props: PlantProps) => {
  const { navigationLink, location, name, image, description } = props;

  return (   
    <StyledCard
      component={Link} 
      to={navigationLink}
      >
        <CardMedia
          className='PCImgContainer'
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            {description.length > 40 
              ? `${description.substring(0, 40)}...` 
              : description
            }
          </Typography>
          <Box className="PLocation">
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography  variant="body2" component="p">
              {location}
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
  );
};

export default PlantCard;