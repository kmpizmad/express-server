// Vendor middlewares
import express from 'express';

export { default as logger } from './logger';
export default [express.urlencoded({ extended: true }), express.json()];
