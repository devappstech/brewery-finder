/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';
import './config/db';
import BeerRoutes from './modules/beer/routes';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Welcome here');
});

app.use('/api/beers', BeerRoutes);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`App listen on port ${constants.PORT}`);
});
