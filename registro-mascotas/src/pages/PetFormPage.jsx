import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSavePet from '../hooks/useSavePet';
import Button from '../components/Button';

export default function PetFormPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { petData, loading, save } = useSavePet(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: petData });

  useEffect(() => {
    reset(petData);
  }, [petData, reset]);

  const onSubmit = (values) => save(values, navigate);

  return (
    <div style={styles.container}>
      <h2>{id ? 'Editar Mascota' : 'Registrar Nueva Mascota'}</h2>

      {loading ? (
        <p>Cargando datos…</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <div style={styles.field}>
            <label>Nombre:</label>
            <input
              {...register('mascota', { required: 'Este campo es obligatorio' })}
              type="text"
            />
            {errors.mascota && <p style={styles.error}>{errors.mascota.message}</p>}
          </div>

          <div style={styles.field}>
            <label>Especie:</label>
            <input
              {...register('especie', { required: 'Este campo es obligatorio' })}
              type="text"
            />
            {errors.especie && <p style={styles.error}>{errors.especie.message}</p>}
          </div>

          <div style={styles.field}>
            <label>Raza:</label>
            <input {...register('raza')} type="text" />
          </div>

          <div style={styles.field}>
            <label>Edad (en años):</label>
            <input
              {...register('edad', {
                required: 'Debe indicar la edad',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo números',
                },
              })}
              type="text"
            />
            {errors.edad && <p style={styles.error}>{errors.edad.message}</p>}
          </div>

          <div style={styles.field}>
            <label>Nombre del Dueño:</label>
            <input
              {...register('propietario', { required: 'Este campo es obligatorio' })}
              type="text"
            />
            {errors.propietario && (
              <p style={styles.error}>{errors.propietario.message}</p>
            )}
          </div>

          <div style={styles.buttons}>
            <Button type="submit">{id ? 'Actualizar' : 'Crear'}</Button>
            <Button
              type="button"
              style={{ backgroundColor: '#757575', marginLeft: '0.5rem' }}
              onClick={() => navigate('/home')}
            >
              Cancelar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '0.3rem',
  },
  buttons: {
    display: 'flex',
    marginTop: '1rem',
  },
};
