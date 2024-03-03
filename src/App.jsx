import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((currentlyActivePlayer) =>
            currentlyActivePlayer === "X" ? "O" : "X"
        );
        setGameTurns((prevTurns) => {
            let currentPlayer = "X";

            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                currentPlayer = "O";
            }
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    ></Player>
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    ></Player>
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    turns = {gameTurns}
                ></GameBoard>
            </div>
            <Log></Log>
        </main>
    );
}

export default App;
