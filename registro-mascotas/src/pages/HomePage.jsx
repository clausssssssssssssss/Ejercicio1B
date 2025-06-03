import { useNavigate } from 'react-router-dom';
import useFetchPets from '../hooks/useFetchPets';
import useDeletePet from '../hooks/useDeletePet';
import Card from '../components/Card';
import Button from '../components/Button';

export default function HomePage() {
  const navigate = useNavigate();
  const { pets, loading, reload } = useFetchPets();
  const { remove } = useDeletePet();

  return (
    <div style={styles.container}>
      <h2>Registro de Mascotas</h2>
      <Button style={{ margin: '1rem 0' }} onClick={() => navigate('/mascotas/nueva')}>
        + Nueva Mascota
      </Button>

      {loading ? (
        <p>Cargando mascotas…</p>
      ) : pets.length === 0 ? (
        <p>No hay mascotas registradas.</p>
      ) : (
        pets.map((p) => (
          <Card key={p.id}>
            <div style={styles.row}>
              <div>
                <strong>Nombre:</strong> {p.mascota} <br />
                <strong>Especie:</strong> {p.especie} <br />
                <strong>Raza:</strong> {p.raza} <br />
                <strong>Edad:</strong> {p.edad} <br />
                <strong>Dueño:</strong> {p.propietario}
              </div>
              <div style={styles.actions}>
                <Button 
                  style={{ marginRight: '0.5rem', backgroundColor: '#388e3c' }} 
                  onClick={() => navigate(`/mascotas/editar/${p.id}`)}
                >
                  Editar
                </Button>
                <Button 
                  style={{ backgroundColor: '#d32f2f' }} 
                  onClick={() => remove(p.id, reload)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
};
