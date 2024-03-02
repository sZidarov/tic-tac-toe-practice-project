import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
function App() {

  return (
    <main>
      <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X"></Player>
        <Player initialName="Player 2" symbol="O"></Player>
      </ol>
        <GameBoard></GameBoard>
      </div>  
      LOG
    </main>
    )
}

export default App
