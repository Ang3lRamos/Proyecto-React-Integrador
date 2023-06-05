import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </nav>
      </header>
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-4 shadow">
              <h2 className="text-lg font-bold text-gray-800">Widget 1</h2>
              <p className="text-gray-600">Contenido del widget 1</p>
            </div>
            <div className="bg-white p-4 shadow">
              <h2 className="text-lg font-bold text-gray-800">Widget 2</h2>
              <p className="text-gray-600">Contenido del widget 2</p>
            </div>
            <div className="bg-white p-4 shadow">
              <h2 className="text-lg font-bold text-gray-800">Widget 3</h2>
              <p className="text-gray-600">Contenido del widget 3</p>
            </div>
            <div className="bg-white p-4 shadow">
              <h2 className="text-lg font-bold text-gray-800">Widget 4</h2>
              <p className="text-gray-600">Contenido del widget 4</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 Dashboard. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
