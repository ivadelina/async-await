/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */


import read from './reader';
import json from './parser';

/* eslint-disable max-classes-per-file */
export default (async function gameSavingLoader() {
  const data = await read();
  const result = await json(data);
  return JSON.parse(result);
}());
