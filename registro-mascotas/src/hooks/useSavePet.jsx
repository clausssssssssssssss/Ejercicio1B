import { useState, useEffect } from 'react';
import { getPetById, createPet, updatePet } from '../services/petsService';
import { toast } from 'react-toastify';

export default function useSavePet(id) {
  const [petData, setPetData] = useState({
    mascota: '',
    especie: '',
    raza: '',
    edad: '',
    propietario: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        setLoading(true);
        const data = await getPetById(id);
        setPetData({
          mascota: data.mascota || '',
          especie: data.especie || '',
          raza: data.raza || '',
          edad: data.edad?.toString() || '',
          propietario: data.propietario || '',
        });
      } catch (error) {
        toast.error(error.message || 'No se pudo cargar la mascota');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const save = async (values, navigate) => {
    try {
      setLoading(true);
      const payload = {
        mascota: values.mascota,
        especie: values.especie,
        raza: values.raza,
        edad: Number(values.edad),
        propietario: values.propietario,
      };

      if (id) {
        await updatePet(id, payload);
        toast.success('Mascota actualizada');
      } else {
        await createPet(payload);
        toast.success('Mascota creada');
      }
      navigate('/home');
    } catch (error) {
      toast.error(error.message || 'Error al guardar mascota');
    } finally {
      setLoading(false);
    }
  };

  return { petData, setPetData, loading, save };
}
