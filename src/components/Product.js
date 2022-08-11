import { useState } from "react";
import  {actionTypes } from "./reducer";
import accounting from "accounting";
import { Provider } from 'react-redux';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardContent } from '@mui/material';
import {Typography} from '@mui/material';
import { provider } from 'react-redux'; 




export default function Product({
  product: { id, name, productType, image, price, description },
}) {
 
  return (
    <Card sx={{ maxWidth: 345, margin:15}}>
      <CardActionArea >
        <CardMedia  

          component="img"
          height="210"
          weight='120'
          image={image}
          alt='product-image'/>
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            {name}
        </Typography>
          <Typography gutterBottom variant="h5" component="div">
           {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {accounting.formatMoney(price, "$")}
            <button  >comprar</button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
