const pg = require('pg');
const {Client}=pg;
const client = new Client({
  user: 'postgres',     
  host: 'localhost',              
  database: 'library', 
  password: 'elrh', 
  port: 5432,   
});

async function connecteDb() {

  await client.connect();
  console.log('ana connecte');
    
}

module.exports ={
  connecteDb,client,
};