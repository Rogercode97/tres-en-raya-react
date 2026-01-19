function Square({ value, onSquareClick }) {
  // Esta función decide qué clase CSS usar
  // Si 'value' es "X" o "O", añade esa clase además de "square"
  const squareClass = `square ${value ? value.toLowerCase() : ''}`;
  
  return (
    <button 
      className={squareClass}  // Esto creará "square x" o "square o"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;