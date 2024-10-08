import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Registro from './Register';
import Inicio from './inicio';
import Publicacion from './publicacion';
import Olvidar from './Olvidar_contrasena';
import { PublicacionProvider } from './PublicacionContext';
import Perfil from './Perfil';
import AgregarCurso from './AgregarCurso';

function App() {
  return (
    <PublicacionProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/publicacion" element={<Publicacion />} />
        <Route path="/olvidar" element={<Olvidar />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/agregar-cursos" element={<AgregarCurso />} /> 
      </Routes>
    </PublicacionProvider>
  );
}

export default App;
