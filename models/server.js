const express = require("express");
const cors = require("cors");
const { dbconection } = require("../DB/config");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        this.paths ={ 
            aeropuerto :       "/api/aeropuerto",
        }

        //Conectar a base de datos
        this.conectarDB();
        //Middlewares
        this.middleware();
        //Rutas de la app
        this.router();
    }
    
    async conectarDB(){
        await dbconection();
    }

    middleware(){
        //Cors
        this.app.use(cors());

        //Lectura y Parceo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static("public"));
    }

    router(){
        
        this.app.use(this.paths.aeropuerto, require("../routes/aeropuerto"));
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("App listening in port:",this.port);
        });
    }
}

module.exports = Server;