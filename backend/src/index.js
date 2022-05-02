import express from 'express';
import morgan from 'morgan';
import seed from '../../database/data-pontos/seed.js';
import router from './routes.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('frontend'));

app.use(router);

seed.loadSeed();

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});