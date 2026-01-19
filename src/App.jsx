// App.jsx - VERSIÓN FUNCIONAL SIN CONFETI
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Confetti from './components/Confetti';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="app">
      <h1>🎮 Tres en Raya</h1>
      
      {winner && <Confetti /> }
      
      <div className="turn-display">
        <div className={`player-turn ${xIsNext ? 'x-active' : 'o-active'}`}>
          <span className="player-label">
            {winner 
              ? `🎉 ¡Ganador: ${winner}! 🏆`
              : currentSquares.every(s => s !== null) 
                ? "🤝 ¡Empate!"
                : "Turno actual:"
            }
          </span>
          
          {!winner && currentSquares.some(s => s === null) && (
            <>
              <span className="player-symbol">{xIsNext ? '❌' : '⭕'}</span>
              <span className="player-text">{xIsNext ? ' (Jugador X)' : ' (Jugador O)'}</span>
            </>
          )}
        </div>
        
        <div className="turn-counter">
          Movimiento: <span className="counter">{currentMove + 1}</span>
        </div>
      </div>
      
      <Board 
        xIsNext={xIsNext} 
        squares={currentSquares}
        onPlay={handlePlay} 
      />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
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