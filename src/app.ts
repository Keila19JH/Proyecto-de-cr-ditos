import { Client } from 'pg';

const connectionData = {
    user: 'developer',
    host: 'localhost', //127.0.0.1
    database: 'creditsDB',
    password: '123456',
    port: 5432
}

const client = new Client(connectionData);

client.connect()

client.query('SELECT * FROM user_types')
    .then(resp => {
        console.log(resp.rows)
        client.end();
    })
    .catch(err => {
        client.end();
    })

