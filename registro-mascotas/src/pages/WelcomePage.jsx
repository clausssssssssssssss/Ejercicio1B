import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenida, Claudia!</h1>
      <p style={styles.subtitle}>Registrando a “Amigos Peludos” </p>
      <button style={styles.button} onClick={() => navigate('/Home')}>
        Ir al Panel
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '0 1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
