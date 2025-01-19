const state = {
  view: {
    catPoints: document.getElementById("cat-points"),
    ratPoints: document.getElementById("rat-points"),
    nameGame: document.getElementById("name-game"),
    tela: document.getElementById("game-principal"),
    frameGame: document.getElementById("frame-game"),
    gameList: document.querySelectorAll(".other-game"),
  },
  values: {
    selectedGame: "jogo-da-velha", //id do jogo selecionado pelo jogador. Deixei um pré-selecionado
  },
};

function listenerSelectGame() {
  state.view.gameList.forEach((gameOption) => {
    gameOption.addEventListener("mousedown", () => {
      if (gameOption.id === state.values.selectedGame) {
        alert("Jogo já em andamento! :D");
      } else {
        state.values.selectedGame = gameOption;
        configGame(state.values.selectedGame.id);
      }
    });
  });
} //Verifica qual o jogo selecionado pelo jogador

function configGame(game) {
  switch (game) {
    case "jogo-memoria":
      state.view.frameGame.src = "./games/jogoDaMemoria.html";
      break;
    case "jogo-jokenpo":
      state.view.frameGame.src = "./games/jokenpo.html";
      break;
    case "game03":
      break;
    case "game04":
      break;
    case "jogo-da-velha":
      state.view.frameGame.src = "./games/jogoDaVelha.html";
      break;
    case "game06":
      break;

    default:
      break;
  }
}

//Main
function init() {
  listenerSelectGame();
}

init();
