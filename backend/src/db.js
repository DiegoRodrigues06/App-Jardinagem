import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'jardinagemDB',
  password: 'cogumelo123',
  port: 5432,
});

export default pool;
