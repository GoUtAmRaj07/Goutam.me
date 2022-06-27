import React from 'react'
import Header from './components/header/header'
import Nav from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Chess from './components/chess/chess'
import Projects from './components/projects/projects'
import Sketches from './components/sketches/sketches'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Projects />
            <Chess />
            <Contact />
            <Footer />
        </div>
    )
}

export default App