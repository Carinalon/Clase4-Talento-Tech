import React, { useState } from 'react';


function Formulario() {

  const [nombre, setNombre] = useState('');

  function manejarEnvio(evento) {
      evento.preventDefault();  //frena que la pagina se recargue, o envie al backend
      alert(`Formulario enviado por: ${nombre}`);
  }
  return (
      <form onSubmit={manejarEnvio}>
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
      </form>
  );
}

export default Formulario;
