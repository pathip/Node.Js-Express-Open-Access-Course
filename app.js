import express from 'express'
import chalk from 'chalk'
import debug from 'debug'
import morgan from 'morgan';
const debug = createDebug(app);
const app = express()
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

    res.send('หมอนข้างที่เทพที่สุด');

})

app.listen(port, ()=>{
    debug("Listneing on port %d" + chalk.green(port));
})