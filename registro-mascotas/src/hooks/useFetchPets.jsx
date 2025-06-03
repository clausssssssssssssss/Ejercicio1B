import { useState, useEffect } from 'react';
import { getAllPets } from '../services/petsService';
import { toast } from 'react-toastify';

export default function useFetchPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getAllPets();
      setPets(data);
    } catch (error) {
      toast.error(error.message || 'Error cargando mascotas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { pets, loading, reload: fetchData };
}
