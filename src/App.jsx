
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import View from './pages/View';

function App() {

  return (
    <>
    <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<View/>} path="/:id/view" />
    <Route element={<Navigate to={"/"} />} path="/*" />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
