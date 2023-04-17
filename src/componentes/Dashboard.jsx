import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white flex-shrink-0 lg:w-64">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="text-xl font-bold">Dashboard</div>
          <button className="lg:hidden">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
        <nav className="text-sm font-medium pt-4 pb-8 px-8">
          <a href="#" className="block py-2 text-white hover:bg-gray-700">Dashboard</a>
          <a href="#" className="block py-2 text-gray-500 hover:text-white hover:bg-gray-700">Reports</a>
          <a href="#" className="block py-2 text-gray-500 hover:text-white hover:bg-gray-700">Analytics</a>
          <a href="#" className="block py-2 text-gray-500 hover:text-white hover:bg-gray-700">Settings</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="bg-gray-100 flex-grow px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Dashboard</div>
          <div>
            <button className="hidden lg:block bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              New Report
            </button>
          </div>
        </div>
        <div className="mt-4">
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
