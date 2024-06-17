/* require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;


 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
