export default function Button({ children, onClick, type = 'button', style = {} }) {
  return (
    <button 
      type={type}
      onClick={onClick}
      style={{
        padding: '0.6rem 1.2rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#1976d2',
        color: 'white',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
