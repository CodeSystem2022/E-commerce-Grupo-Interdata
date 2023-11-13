import  express  from "express";
// Fix para __dirname
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

// Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));

// Configuracion
app.use(express.static(__dirname + "/public"));
// Middlewares
app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));
app.use(morgan("dev"));
app.use(express.json());

// Rutas

app.get("/", (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", (req, res) => res.sendFile(__dirname + "/pages/register.html"));

app.get("/productos",async (req,res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * from producto")
    res.json(result)
});

app.post("/carrito/comprar", async (req,res) => {
    if(req.body && req.body.length > 0) {
        return res.sendStatus(200);
    }
    res.sendStatus(400);
})