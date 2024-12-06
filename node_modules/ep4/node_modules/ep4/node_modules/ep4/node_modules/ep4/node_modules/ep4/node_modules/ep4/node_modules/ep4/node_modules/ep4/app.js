import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
const debug = createDebug('app');
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const productRounter = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs")

productRounter.route("/").get((req,res) => {
    res.render("product");
});

app.use("/products", productRounter)

app.get("/", (req, res) => {

    res.render('index', {username: 'Pathip', customers: ["Kitti","Kittikorn","Pai Will Win"]});

})

app.listen(PORT, () => {
    debug("Listneing on port %d" + chalk.green(PORT));
})