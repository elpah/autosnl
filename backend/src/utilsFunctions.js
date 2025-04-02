import client from "./db/client.js";

let db;
const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    const dbName = process.env.DB_NAME;
    db = client.db(dbName);
  }
  return db;
};

function convertToLowerCase(arr) {
  return arr.map((str) => str.toLowerCase());
}


const processArrays = (filterValue, defaultValue = []) => {
  return filterValue ? convertToLowerCase(filterValue) : defaultValue;
};

const parseNums= (value, defaultValue = 0) => {
  return value && !isNaN(value) ? Number(value) : defaultValue;
};


export { connectToDatabase, convertToLowerCase, processArrays, parseNums };
