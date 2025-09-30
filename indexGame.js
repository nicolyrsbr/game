import express from 'express';
import {
    listarjogos, buscarPorId, buscarPorGenero, buscarPorPlataforma, buscarPorNome
} from './GAME/GameServico/servicoGames.js'



const app = express();



//Listar todos os jogos
app.get('/jogos', (req, res) => {
    res.json(listarjogos());
});


//Buscar por id

app.get('/jogos/id/:idgame', (req, res) => {
    const idGame = req.params.idgame;
    const game = buscarPorId(idGame);

    if (game) {
        res.json(game);
    } else if (isNaN(parseInt(req.params.idgame))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "Game não encontrado" });
    }
});



//Buscar por gênero
app.get('/jogos/genero/:genero', (req, res) => {
    const generoGame = req.params.genero;
    const game = buscarPorGenero(generoGame);

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": "Gênero não encontrado" });
    }
})


//Buscar por plataforma
app.get('/jogos/plataforma/:plataforma', (req, res) => {
    const plataformaGame = req.params.plataforma;
    const game = buscarPorPlataforma(plataformaGame);

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": "Plataforma não encontrada" });
    }
});


//Buscar por nome
app.get('/jogos/nome/:nome', (req, res) => {
    const nomeGame = req.params.nome;
    const game = buscarPorNome(nomeGame);

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": "Nome não encontrado" })
    }
});

//Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});