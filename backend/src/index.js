import express from 'express';
import morgan from 'morgan';
import { pontos, getId } from './pontos.js'

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('../frontend'));

app.post('/create-pontos', (req, res) => {
  let ponto = req.body;

  ponto = {id: getId(), ...ponto}

  pontos.push(ponto);
  res.status(200).json(ponto);
});

app.get('/get-pontos', (req, res) => {
  res.status(200).json(pontos);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});