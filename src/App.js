import './App.css';
import Login from "../src/componentes/Login/Login"
import Register from "../src/componentes/Register/Register"
import Pagina from "./componentes/Pagina.jsx"
import Navbar from './componentes/Navbar';
import Barra from './componentes/Barra.jsx'
import Footer from './componentes/Footer';
import Blog from './componentes/Blog.jsx';
import Contact from './componentes/Contact';
import AboutUs from './componentes/AboutUs';
import Dashboard from "../src/componentes/Dashboard/Dasboard.jsx"
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from "./Principal/Inicio.jsx";

function App() {
  return (
    <div className="App">
    <div>
    {/* <Navbar/>
    <Pagina/>
    <main className="bg-blue-400 h-full">
    <Footer/>
    </main> */}
    {/* <main className="h-screen w-screen flex justify-center items-center bg-indigo-100">
      <Login/>
    </main> */}
    {/* <AboutUs/> */}
    {/* <Contact/> */}
    {/* <RegisterForm/> */}
    {/* <Dashboard/> */}
    <Navbar/>
      <Routes>
        <Route path="/blog" element={<Blog/>} / >
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    <Pagina/>
    <main className="bg-blue-400 h-full">
    <Footer/>
    </main>
    {/* <Dashboard/> */}
    {/* <Inicio/>
    <Routes>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/contactUs" element={<Contact/>} />
        </Routes> */}
    </div>
  </div>
  );
}

export default App;
