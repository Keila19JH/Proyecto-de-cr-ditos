import express, {Router} from 'express'; 



interface Options{
    port: number,
    routes: Router,
    public_path?: string;
}


export class Server{
    private app = express();
    private readonly port: number;
    private readonly public_path: string;
    private readonly routes: Router;

    constructor(  options: Options ){
        this.port = options.port;
        this.public_path = options.public_path || 'public';
        this.routes = options.routes;
    }

    async start(){

        //middlewares
        //parse data to json
        this.app.use( express.json() );

        this.app.use( express.urlencoded({ extended: true}) );

        this.app.use(express.static( this.public_path ) );

        this.app.use( this.routes );

        this.app.listen()
        
    
    
    }


}