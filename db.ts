import { Pool } from 'pg';

const pool = new Pool({
  user: 'giorno_giovana',
  host: 'localhost',
  database: 'mydbteste',
  password: '99289885',
  port: 5432,
});

export default pool;
