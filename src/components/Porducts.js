
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../Product-data'



export default function Products() {
  return (
    <Box marginLeft={5} sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}