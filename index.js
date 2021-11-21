import express from "express"
import dotenv from "dotenv"
import connect from "./src/configs/db.config"
import router from "./src/routers/router"

const app = express()
dotenv.config()

connect()

app.use(express.urlencoded({
	extended: true
}));
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const port = process.env.PORT || 8000

router(app);
app.listen(port, () => console.log(`listen from port ${port}`))



