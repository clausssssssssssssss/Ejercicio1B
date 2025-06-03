# Registro de Mascotas

Proyecto creado por **Claudia María Hernández Ortega**.  
Aplicación web sencilla para gestionar el registro de mascotas (CRUD) utilizando **React** + **Vite** y consumiendo una API externa.

---

## 📋 Descripción

Esta aplicación permite:  
- **Crear** una mascota (nombre, especie, raza, edad, propietario).  
- **Listar** todas las mascotas registradas.  
- **Editar** datos de una mascota existente.  
- **Eliminar** una mascota.  

La interfaz está dividida en:  
1. **WelcomePage** (pantalla de bienvenida)  
2. **HomePage** (lista de tarjetas con cada mascota)  
3. **PetFormPage** (formulario para crear/editar)  
4. **NotFoundPage** (rutero comodín para URLs inválidas)  

Toda la lógica de peticiones HTTP (GET, POST, PUT, DELETE) se encapsula en el servicio `petsService.jsx`, y se abstrae en custom hooks (`useFetchPets`, `useSavePet`, `useDeletePet`). Se usan rutas de React Router (v6) para navegar entre páginas y `react-hook-form` para manejar formularios y validaciones. Las notificaciones tipo “toast” se muestran con **react-toastify**.

---

## ⚙️ Tecnologías

- **Framework / Bundler:**  
  - [Vite](https://vitejs.dev/) (dev server ultra rápido)  
  - [React](https://reactjs.org/) (v18+)  

- **Ruteo y Formularios:**  
  - `react-router-dom` (v6)  
  - `react-hook-form` (v7)  

- **Notificaciones:**  
  - `react-toastify`  

- **Consumo de API:**  
  - `fetch` nativo encapsulado en `petsService.jsx`  

- **Estilos:**  
  - Estilos en línea (inline styles) y un CSS global mínimo (`index.css`).  

- **Lenguaje / Estructura:**  
  - Archivos con extensión `.jsx`  
  - Hooks personalizados para lógica de peticiones  
  - Componentes genéricos: `<Button />`, `<Card />`  

---

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/<TU_USUARIO>/registro-mascotas.git
   cd registro-mascotas

