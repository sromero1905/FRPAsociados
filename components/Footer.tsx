/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Contacto: React.FC = () => {
  return (
    <section className="contact-section py-28 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Información de Contacto */}
        <div className="lg:w-2/3 text-center lg:text-left mb-16 lg:mb-0">
          <h2 className="text-6xl md:text-7xl mb-14 tracking-wide title">Contacto</h2>
          <div className="mb-12 contact-info email">
            <p className="text-2xl font-semibold mb-4 title">Email</p>
            <p className="text-lg mb-2">
              Envíe sus datos personales y envíenos sus comentarios.
            </p>
            <a
              href="mailto:info@brya.com.ar"
              className="text-lg hover:text-primary-foreground"
            >
              info@brya.com.ar
            </a>
          </div>
          <div className="mb-12 contact-info phones">
            <p className="text-2xl font-semibold mb-4 title">Teléfonos</p>
            <p className="text-lg mb-1">
              Puede llamarnos a nuestras oficinas:
            </p>
            <p className="text-lg">Tel.: +54-11 4816-5140</p>
            <p className="text-lg">Fax: +54-11 4816-5143</p>
          </div>
          <div className="contact-info address">
            <p className="text-2xl font-semibold mb-4 title">Dirección</p>
            <p className="text-lg">
              Av. Santa Fe 1193, Piso 3 — Oficina Nº 11
            </p>
            <p className="text-lg">
              Ciudad de Buenos Aires (C1059ABF)
            </p>
            <p className="text-lg">
              Buenos Aires, Argentina
            </p>
            <a href="https://maps.app.goo.gl/f2UDg8WJVgW5L39R8" target="_blank" rel="noopener noreferrer">
              <button className="mt-8 px-10 py-4 bg-gray-300 text-gray-800 text-lg rounded-lg hover:bg-gray-400 hover:text-gray-900 shadow-lg">
                Cómo llegar
              </button>
            </a>
          </div>
        </div>

        {/* Imagen de Contacto */}
        <div className="lg:w-1/2">
          <img
            src="/contact.jpg" // Asegúrate de colocar la ruta correcta de la imagen.
            alt="Edificio"
            className="rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
