import express from 'express';
import seed from '../../database/data-pontos/seed.js'; 
import seedUser from '../../database/data-login/seed.js'; 
import readData from '../../database/data-pontos/datapontos.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Pontos

router.post('/create-pontos', async (req, res) => {
    let ponto = req.body;
  
    // junta o novo ponto aos do Seed, adicionando sempre na última posição
    const id = await seed.create(ponto);

    res.status(200).json(id);
});
  
router.get('/get-pontos', async (req, res) => {
    // envia os pontos do Seed automaticamente e fora Bolsonaro!!!
    const pontos = await seed.readAll();
    res.status(200).json(pontos);
});

router.get('/get-pontos/nome/:nome', async (req, res) => {
    // envia os pontos do Seed automaticamente
    const ponto = await seed.readByNome(req.params.nome);

    if(ponto) {
        res.status(200).json(ponto);
    } else {
        res.status(404).json("Não encontrado");
    }
});

router.get('/get-pontos/id/:id', async (req, res) => {
    // envia os pontos do Seed automaticamente
    const ponto = await seed.readById(parseInt((req.params.id)));

																				

    if(ponto) {
        res.status(200).json(ponto);
    } else {
        res.status(404).json("Não encontrado");
    }
});
/*
router.get('/get-datapontos', (req, res) => {
    // envia os dados das páginas individuais dos pontos automaticamente
    const pontos = readData();
    res.status(200).json(pontos);
});
*/


// Users

router.post('/create-user', async (req, res) => {
    let user = req.body;
    const response = await seedUser.create(user);

    res.status(200).json(response);
});

router.post('/change-user', async (req, res) => {
    let user = req.body;

  
    const response = await seedUser.change(user);
		if(typeof response == 'string') {
    	res.status(404).json(response);		
		} else res.status(200).json(response);
});


router.post('/change-password', async (req, res) => {
    let user = req.body;

  
    const response = await seedUser.changePassword(user);
		if(response.status == false) {
    	res.status(404).json(response);		
		} else res.status(200).json(response);
});

router.post('/verify-email', async (req, res) => {
    let {email} = req.body;

    const authorized = await seedUser.getUserIdByEmail(email);

    if (authorized) {
      res.status(200).json({"status": "Tudo certo, pode continuar!", "id": authorized});
    } else {
      res.status(404).json({"status": "Não encontramos esse usuário :/", "error": true});
    }

});

router.post('/auth-user', async (req, res) => {
    let {login, senha} = req.body;

    const authorized = await seedUser.auth(login, senha);

    if (authorized) {
      res.status(200).json({"status": "Login feito com Sucesso!", "id": authorized});
    } else {
      res.status(404).json({"status": "Login e/ou senha incorreto(s)!", "error": true});
    }

});

router.get('/get-user/id/:id', async (req, res) => {
    const id = req.params.id;
    const user = await seedUser.readById(id);
  
    res.status(200).json(user);
})

router.get('/get-users-data', async (req, res) => {
    // pega os dados do usuário quando ele estiver logado
    const users = await seedUser.readAll();
    res.status(200).json(users);
});

router.get('/pontos', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/base-ponto.html'));
});

router.get('/get')

/* app.put(""/perfil/:id", (req, res) =>
      const perfil = Perfil.updateOne({_id: req.params.id}, req.body, (err) => {
          if(err) return res.status(400).json({
              error: true,
              message: "Erro arquivo não editado!"
      });
          return res.json({
              error: false,  
              message: "Arquivo editado com sucesso!
          });
});
*/
export default router;