export default function Card({ children, style = {} }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '6px',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
