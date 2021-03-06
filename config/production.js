module.exports = {
  env: 'production',
  port: process.env.PORT,
  infura: {
    provider: process.env.DEV_PROVIDER,
  },
  etherscan: {
    apikey: process.env.ETHERSCAN_KEY,
    endpoint: process.env.ETHERSCAN_ENDPOINT,
  },
  db: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  },
  jwtSecret: process.env.JWT_SECRET,
  encryptionKey: process.env.ENCRYPTION_KEY,
};
