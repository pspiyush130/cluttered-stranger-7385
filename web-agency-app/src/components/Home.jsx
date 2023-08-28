import React from 'react';
import ServiceCard from './ServiceCard';

import '../components/Home.css';
const Home = () => {
  const services = [
    {
      title: 'Web Design 💻',
      description: 'We create beautiful and user-friendly web designs to captivate your audience.',
      icon: <i className="fas fa-desktop"></i>,
  
    },
    {
      title: 'Web Development 🌐',
      description: 'Our expert developers build robust and scalable web applications for your business needs.',
      icon: <i className="fas fa-code"></i>,
      
    },
    {
      title: 'Digital Marketing 📈',
      description: 'We offer tailored digital marketing strategies to promote your brand and drive growth.',
      icon: <i className="fas fa-bullhorn"></i>,
    
    },
  ];

  return (
    <div className="home">
        
      <h1>TechMint!</h1>
      
     
      <h2>💻</h2>
      <p id="mono">We provide innovative web solutions to help your<br></br> business grow and succeed online.</p>
      <div className="button-with-text">
        <p>Get a quote</p>
        <button id='btn'>Click Me</button>
      </div>
      <div className="services-section">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>

  
      
   



      
    </div>
  );
};

export default Home;
