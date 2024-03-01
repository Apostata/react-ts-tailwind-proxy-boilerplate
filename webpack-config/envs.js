const dotEnv = require('dotenv');
const { NODE_ENV, TARGET } = process.env;
let envPath = '.env';
envPath += `.${NODE_ENV.toLowerCase()}`;
const envs = dotEnv.config({ path: envPath });
const environments = { ...envs.parsed };
const match = environments.HOST.match(/[^\w\S]*\d+/);
const PORT = match && match.length > 0 ? Number(match[0]) : ' ';
const SECURE = environments.HOST.includes('https')?'https':'http';
module.exports = {
  ...environments,
  NODE_ENV,
  PORT,
  SECURE,
  TARGET,
};
