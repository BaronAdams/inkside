import mongoose from "mongoose";
//@ts-ignore
let db;

connect();

async function connect() {
    //@ts-ignore
    if (db) return db;

    if (process.env.NODE_ENV === "production") {
    //@ts-ignore
        db = await mongoose.connect(process.env.DATABASE_URL, {
            dbName:'inkside'
        });
        console.log('Connexion à MongoDB réussie !')
    } else {
        //@ts-ignore
        if (!global.__db) {
            //@ts-ignore
            global.__db = await mongoose.connect('mongodb://127.0.0.1:27017/inkside');
            console.log('Connexion à MongoDB réussie !')
        }
        //@ts-ignore
        db = global.__db;
  }
  return db;
}

export { mongoose, connect };
