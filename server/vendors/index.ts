// Middlewares
import bodyParser from 'body-parser';

export { default as logger } from './logger';
export default [bodyParser.json(), bodyParser.urlencoded({ extended: false })];
