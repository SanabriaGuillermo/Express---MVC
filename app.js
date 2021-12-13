const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routers/main");

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", homeRouter);