/* eslint-disable @typescript-eslint/no-var-requires */

// Note:
// This injects env variables to the bundle in PLAIN TEXT
// ONLY PUT PUBLICLY ACCESSIBLE VALUES

const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

const dotenvPath = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : undefined;

dotenv.config({
  path: dotenvPath
});

const env = Object.keys(process.env).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
  return acc;
}, {});

delete env['process.env.NODE_ENV']; // so that it does not clash with real NODE_ENV

module.exports = new DefinePlugin(env);
