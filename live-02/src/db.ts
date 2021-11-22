import { Pool } from 'pg';

const connectionString = 'postgres://mecdedjf:Lo-aM-qKk_e7Ul0QYz3GrvXme3wexL22@kesavan.db.elephantsql.com/mecdedjf';

const db = new Pool({ connectionString });

export default db;