import serverless from 'serverless-http';
import app from '../../index.js'; // This imports your app from the root index.js

export const handler = serverless(app);