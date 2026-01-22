import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Confetti from './components/Confetti';

function App() {
  const [scores, setScores] = useState(() => {
    const saved = localStorage.getItem('tictactoe-scores');
    return saved ? JSON.parse(saved) : { x: 0, o: 0 };
  });

  const [matchHistory, setMatchHistory] = useState(() => {
    const saved = localStorage.getItem('tictactoe-mathHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const [moveCount, setMoveCount] = useState(0);
  const [lastProcessedMove, setLastProcessedMove] = useState(-1);

  const handleWin = useCallback(
    (theWinner) => {
      setScores((prev) => {
        const newScores = {
          ...prev,
          [theWinner.toLowerCase()]: prev[theWinner.toLowerCase()] + 1,
        };
        localStorage.setItem('tictactoe-scores', JSON.stringify(newScores));
        return newScores;
      });
      const newEntry = {
        winner: theWinner,
        date:
          new Date().toLocaleDateString() +
          ' ' +
          new Date().toLocaleTimeString(),
        moves: currentMove + 1,
      };
      setMatchHistory((prevHistory) => {
        const updatedHistory = [newEntry, ...prevHistory.slice(0, 4)];
        localStorage.setItem(
          'tictactoe-mathHistory',
          JSON.stringify(updatedHistory)
        );
        return updatedHistory;
      });
    },
    [currentMove]
  );

  useEffect(() => {
    if (winner && currentMove !== lastProcessedMove) {
      const timer = setTimeout(() => {
        handleWin(winner);
        setLastProcessedMove(currentMove);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [winner, currentMove, lastProcessedMove, handleWin]);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
    setMoveCount(moveCount + 1);
  }

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);

    if (typeof setMoveCount === 'function') {
      setMoveCount(0);
    }
  }
  return (
    <div className="app">
      <h1>🎮 Tres en Raya</h1>
      <div className="scoreboard">
        <div className="score-box x-score">
          <span>JUGADOR X</span>
          <div className="points">{scores.x}</div> {}
        </div>

        <div className="score-divider">-</div>

        <div className="score-box o-score">
          <span>JUGADOR O</span>
          <div className="points">{scores.o}</div> {}
        </div>
      </div>

      <p>Movimientos realizados: {moveCount}</p>
      <p>Movimientos realizados: {moveCount}</p>
      {winner && <Confetti />}
      <div className="turn-display">
        <div className={`player-turn ${xIsNext ? 'x-active' : 'o-active'}`}>
          <span className="player-label">
            {winner
              ? `🎉 ¡Ganador: ${winner}! 🏆`
              : currentSquares.every((s) => s !== null)
                ? '🤝 ¡Empate!'
                : 'Turno actual:'}
          </span>

          {!winner && currentSquares.some((s) => s === null) && (
            <>
              <span className="player-symbol">{xIsNext ? '❌' : '⭕'}</span>
              <span className="player-text">
                {xIsNext ? ' (Jugador X)' : ' (Jugador O)'}
              </span>
            </>
          )}
        </div>

        <div className="turn-counter">
          Movimiento: <span className="counter">{currentMove + 1}</span>
        </div>
      </div>
      <button className="restart-button" onClick={handleRestart}>
        Reiniciar Juego
      </button>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <div className="history-section">
        <h3>📜 Últimas Partidas</h3>
        {matchHistory.length === 0 ? (
          <p className="no-data">
            ¡Aún no hay partidas! Juega una para empezar el historial.
          </p>
        ) : (
          <div className="history-list">
            {matchHistory.map((match, index) => (
              <div key={index} className="history-card">
                <div className="history-info">
                  <span
                    className={`winner-badge ${match.winner.toLowerCase()}`}
                  >
                    {match.winner} Ganó
                  </span>
                  <span className="history-date">{match.date}</span>
                </div>
                <div className="history-stats">
                  <span>En {match.moves} movimientos</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
