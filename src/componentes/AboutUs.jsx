import React from 'react';

function AboutUs() {
  return (
    <section className="bg-gray-100 bg-cover bg-center py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre nosotros
            </h2>
            <p className="mt-4 text-lg text-gray-500">
            Somos una empresa encargada de gestionar los residuos y crear estrategias para 
            darle uso, también brindamos información sobre cómo reciclar correctamente.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-base font-medium text-blue-600 hover:text-blue-500"
              >
                Aprenda más acerca de nosotros &rarr;
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://www.portafolio.co/files/article_multimedia/uploads/2016/04/21/57194981769cd.jpeg"
              alt="Unsplash random photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
