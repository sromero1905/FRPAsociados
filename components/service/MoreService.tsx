import React from 'react';

const MoreInfoService: React.FC = () => {
  return (
    <section className="moreinfo-service layout-container section-padding">
      <div className="moreinfo-content">
        <h1 className="typography-heading moreinfo-title">
          Asesoramos a empresas en litigio & transacciones.
        </h1>
        <p className="typography-paragraph moreinfo-subtitle">
          Nos comprometemos a proporcionar asesoramiento legal excepcional y soluciones estratégicas a empresas y particulares en un entorno jurídico, económico y tecnológico en constante evolución.
        </p>
        <div className="moreinfo-buttons">
          <button className="button-primary">Contactanos</button>
          <button className="button-outline">Saber más</button>
        </div>
      </div>
      <div className="moreinfo-image-container">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Imagen de oficina" 
          className="image-responsive moreinfo-image" 
        />
      </div>
    </section>
  );
};

export default MoreInfoService;
