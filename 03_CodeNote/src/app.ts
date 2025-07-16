// Sirve para crear una aplicación Express y definir rutas básicas

import Express from 'express';
import { Request, Response } from 'express';


class App{
    private app!: Express.Application;

    constructor(){ // constructor sirve para inicializar la clase
        this.app = Express();
        this.routes();
    }

    private routes(): void {
        this.app.get("/", (request: Request, response: Response) => {
          response.send("¡Hola, mundo!");
        });

        this.app.get("/check", (request: Request, response: Response) => {
          response.send("Check endpoint is working!");
        });

        this.app.get("/checktest", (request: Request, response: Response) => {
          response.send("check test endpoint is working!");
        });
    }

    getApp (){ // getApp es un metodo que devuelve la instancia de la aplicacion
        return this.app;
    }
}
export default new App().getApp();