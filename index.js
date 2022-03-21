const express = require ("express");
const cors = require ("cors");
//router
const router = require ('./routes')
//DB
const db = require('./db/models')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, ()=>{
    console.info("\n------- servidor prendido en el puerto: " + PORT + "--------");

})