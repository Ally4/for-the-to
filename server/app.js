import express from 'express';
import router from './router/router';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use('/', router);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});

export default app;