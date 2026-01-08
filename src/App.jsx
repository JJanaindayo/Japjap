import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CalltoAction from './components/Cta'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Nav/>
      <Hero/>
      <Skills/>
      <Projects/>
      <CalltoAction/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
