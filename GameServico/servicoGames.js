<<<<<<< HEAD:TAREFAS/GameServico/servicoGames.js
import colecaoGames from "../../../GameDados/dadosGames";
=======
import colecaoGames from "../GameDados/dadosGames.js";
>>>>>>> 43b36ed8e82eb0d3ff86790ea40ca010f39c845c:GameServico/servicoGames.js

//Listar todos os jogos
export const listarjogos = () => {
    return colecaoGames;
}

//Buscar jogo por id
export const buscarPorId = (id) => {
    const idGame = parseInt(id);
    return colecaoGames.find(game => game.id === idGame);
}

//Buscar jogos por gênero
export const buscarPorGenero = (generoGame) => {
    return colecaoGames.filter(game => game.genero.toLowerCase().includes(generoGame.toLowerCase()));
}

//Buscar jogos por plataforma
export const buscarPorPlataforma = (plataformaGame) => {
    return colecaoGames.filter(game => game.plataformas.toLowerCase().includes(plataformaGame.toLowerCase()));
}

//Buscar jogos por nome (busca parcial e case-insensitive)
export const buscarPorNome = (nomeGame) => {
    return colecaoGames.filter(game =>
        typeof game.nome === 'string' &&
        game.nome.toLowerCase().includes(nomeGame.toLowerCase())
    );
}
