import { createConnection } from 'typeorm';
import { dbParams } from './dbMySQL';

async function connect() {
  try {
    await createConnection({
      type: 'mysql',
      host: dbParams.host,
      port: dbParams.port,
      username: dbParams.username,
      password: dbParams.password,
      database: dbParams.database,
      entities: ['dist/entity/**/**.js'],
      synchronize: true,
    });

    console.log('Database is connected');
  } catch (error) {
    console.log(error);
  }
}

export default { connect };
