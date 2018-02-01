/* eslint-disable no-console */

import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.connect(constants.DB_URL);

mongoose.connection
  .once('open', () => console.log('Mongodb running'))
  .on('error', e => {
    throw e;
  });
