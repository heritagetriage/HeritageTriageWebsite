import React, { useEffect } from 'react';
    import AOS from 'aos';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Services from './components/Services';
    import Priorities from './components/Priorities';
    import Testimonials from './components/Testimonials';
    import SkillsSection from './components/SkillsSection';
    import ContactForm from './components/ContactForm';
    import Footer from './components/Footer';

    function App() {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }, []);

      return (
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Priorities />
            <Testimonials />
            <SkillsSection />
            <ContactForm />
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
