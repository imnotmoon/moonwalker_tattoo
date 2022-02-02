import SequelizeAuto from 'sequelize-auto';
import dotenv from 'dotenv';
dotenv.config();

const auto = new SequelizeAuto(
  process.env.DATABASE_DBNAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
  }
);

auto.run((error) => {
  if(error) throw error;
})
