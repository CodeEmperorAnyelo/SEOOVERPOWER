import React, { useState } from 'react';
import '../styles/LoginPage.css'; // Opcional: para estilos personalizados

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validación básica
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    
    try {
      // Llamada a la API para autenticar al usuario
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Guardar el token en el almacenamiento local (localStorage) o en el estado global
        localStorage.setItem('authToken', data.token);
        // Redirigir al usuario a la página de inicio u otra página
        window.location.href = '/';
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión.');
      }
    } catch (error) {
      setError('Error en la conexión con el servidor.');
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;