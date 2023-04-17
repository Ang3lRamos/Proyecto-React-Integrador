import React from 'react'
import imagen from "../imagenes/imagen1.png"
import imagen1 from "../imagenes/imagen2.png"
import imagen2 from "../imagenes/imagen3.png"
function Pagina() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://alpina.com/media/mageplaza/blog/post/t/i/tipos-de-reciclaje-como-ponerlo-en-practica-en-casa-.jpg')" }}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">"No somos dueños del mundo, somos parte de él"</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg">
            <img src={imagen} alt="Card 1" className="rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Recicla</h2>
              <p className="text-gray-700">"Reciclar no es solo una tarea, es una responsabilidad que tenemos con el planeta. Cada pequeño acto cuenta para crear un mundo más sostenible y limpio."</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img src={imagen1} alt="Card 2" className="rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Reusa</h2>
              <p className="text-gray-700">"Cada vez que reciclas, estás dando una segunda oportunidad a los materiales y al medio ambiente. Hazlo con amor y verás cómo tu pequeña contribución se transforma en un gran cambio."</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img src={imagen2} alt="Card 3" className="rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Reduce</h2>
              <p className="text-gray-700">"El reciclaje es una muestra de amor por la naturaleza y por nosotros mismos. Al cuidar el planeta, estamos asegurando nuestro propio futuro y el de las próximas generaciones. ¡Hagamos del reciclaje un estilo de vida!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagina;