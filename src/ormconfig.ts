import process from 'process';

const host = process.env.POSTGRES_HOST || 'nestjs_postgresql';
const database = process.env.POSTGRES_DATABASE || 'nestjs';
const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'example';
const port = Number(process.env.POSTGRES_PORT) || 5432;

module.exports = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: [
    __dirname + '/src/**/*.entity.ts',
    __dirname + '/dist/**/*.entity.js',
  ],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
};
