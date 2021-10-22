const express = require("express");
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const arr = [
    {   
        id:1,
        name:"Papel Higienico",
        description:"Papel Higienico Ultra Doble Hoja 4 Un. 30 Mts",
        price:75,
        code:0001,
        picture: "https://pixabay.com/get/g3290b0bc8fd0e80141fb4fbcc29bee90ef127c979fde5bfd32e9b5db33f32a51d8927082e53c82c3d2cc0a1d910038cd66b505522f3bb1d3992b93003ceee945_1920.jpg",
        stock: 30

    },
    {   
        id:2,
        name:"Auriculares",
        description: "Los auriculares totalmente inalámbricos WF-1000XM3 combinan la tecnología noise cancelling líder del sector con un sonido de alta calidad, funciones de audio inteligentes, conectividad Bluetooth® y NFC, una duración de la batería para todo el día y comodidad para audio prolongado.",
        price:300,
        code:0002,
        picture: "https://arsonyb2c.vtexassets.com/arquivos/ids/255991-1600-auto?v=636979033832000000&width=1600&height=auto&aspect=true",
        stock: 10
    },
    {   
        id:3,
        name:"Rollos de Cocina",
        description: "Rollo cocina X 40 paños",
        price:50,
        code:0003,
        picture: "https://pixabay.com/get/gbe62f545637e5afc3378bc61efd80e4ac33c5a8540326a27b376636ece704b44c80fe2209c88286b46caad876cebb3364642118b92e210ca5ee219e0841d280e_1920.jpg",
        stock: 30
    },
    {   
        id:4,
        name:"Lapicera",
        description: "Boligrafo Bic Cristal Up Surtido X 8un",
        price:225,
        code:0004,
        picture: "https://walmartar.vteximg.com.br/arquivos/ids/842955-1000-1000/Boligrafo-Bic-Cristal-Up-Surtido-X-8un-1-65407.jpg?v=636845661310230000",
        stock: 20
    }
]

app.set("views", __dirname + "/routes");
app.set("view engine", "ejs")

app.get("/api", (req, res) => {
    res.render("index", {name: "Primera Entrega"})
})

app.get("/api/productos", (req, res) => {
    res.render("productos", {data:arr})
})

app.get("/api/carrito", (req, res) => {
    res.render("carrito", {})
})


const port = process.env.port || 8080
app.listen(port, () => {
    console.log("Servidor corriendo en " + port);
})
