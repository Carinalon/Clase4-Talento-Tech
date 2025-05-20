export default function Boton() {
  function manejarClick() {
    alert('Botón clickeado!');
  }
  return <button onClick={manejarClick}>Hacer clic</button>;

}