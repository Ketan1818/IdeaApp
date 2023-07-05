const express = require('express')
const serverConfig=require('./conifgs/server.config');
const app = express();

app.listen(serverConfig.PORT, () =>{
    console.log(`server started ON the port num ${serverConfig.PORT}`)
})