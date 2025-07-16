// Es para inicializar el servidor Express → por eso se llama bootstrap


import * as Express from 'express';
import * as http from 'http';


export class ServerBootstrap {
    private app!: Express.Application;

    constructor(app: Express.Application) {
        this.app = app;
    }
    
    init (): void {
        const server = http.createServer(this.app);
        const PORT = 4000;
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
        });
    }
}