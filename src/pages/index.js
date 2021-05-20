import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/styles.scss';


const index = () => {
  return (
    <main className='home-page'>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </Layout>
    </main>
  )
}

export default index
