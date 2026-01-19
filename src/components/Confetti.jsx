// src/components/Confetti.jsx
const Confetti = () => {
  const pieces = [
    { emoji: '🎉', left: '10%', delay: '0s' },
    { emoji: '✨', left: '30%', delay: '0.3s' },
    { emoji: '⭐', left: '50%', delay: '0.6s' },
    { emoji: '🎊', left: '70%', delay: '0.9s' },
    { emoji: '🥳', left: '90%', delay: '1.2s' },
  ];

  return (
    <div style={styles.container}>
      {pieces.map((piece, index) => (
        <div
          key={index}
          style={{
            ...styles.confettiPiece,
            left: piece.left,
            animationDelay: piece.delay,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
  },
  confettiPiece: {
    position: 'absolute',
    top: '-50px',
    fontSize: '40px',
    animation: 'confetti-fall 3s linear infinite',
  }
};

export default Confetti;