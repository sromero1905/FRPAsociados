import React from 'react';
import { FaBalanceScale, FaBuilding, FaGavel, FaUsers, FaShieldAlt, FaHandshake, FaBriefcase, FaLandmark } from 'react-icons/fa';

const AreasDePractica = () => {
  return (
    <section className="my-24 py-16 bg-black"> {/* Fondo negro para el componente */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white heading">
            Áreas de Práctica
          </h2>
          <p className="mt-4 text-lg text-gray-300"> {/* Texto en gris claro para contraste */}
            Nos esforzamos por comprender las necesidades únicas de cada cliente y ofrecer servicios personalizados y de alta calidad que agreguen valor a sus operaciones comerciales.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { icon: FaBalanceScale, title: 'Arbitraje', description: 'Asesoramos en arbitrajes nacionales e internacionales, ofreciendo representación legal y servicios como testigos expertos.' },
            { icon: FaBuilding, title: 'Comercial & Societario', description: 'Especialistas en derecho comercial y societario, brindamos asesoramiento desde la creación hasta la reestructuración de empresas.' },
            { icon: FaUsers, title: 'Familias & Sucesiones', description: 'Gestionamos asuntos de familia y sucesiones con sensibilidad, enfocándonos en divorcios, custodias y planificación patrimonial.' },
            { icon: FaShieldAlt, title: 'Defensa de la Competencia', description: 'Proporcionamos asesoramiento integral en defensa de la competencia, prácticas anticompetitivas y cumplimiento de regulaciones.' },
            { icon: FaGavel, title: 'Concursos & Quiebras', description: 'Brindamos asesoramiento en procedimientos concursales, liquidación de activos y reestructuración de deudas.' },
            { icon: FaHandshake, title: 'Laboral', description: 'Asesoramos en cuestiones laborales, desde contratos hasta litigios, asegurando el cumplimiento de las normativas laborales.' },
            { icon: FaBriefcase, title: 'Derecho Corporativo', description: 'Ofrecemos asesoramiento en derecho corporativo, ayudando a las empresas a cumplir con la normativa y optimizar su estructura legal.' },
            { icon: FaLandmark, title: 'Inmobiliario', description: 'Proveemos asesoramiento en derecho inmobiliario, cubriendo todo el proceso de adquisición, venta y administración de propiedades.' }
          ].map((area, index) => (
            <div key={index} className="relative p-6 bg-black text-white rounded-lg shadow-lg">
              <area.icon className="text-gray-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasDePractica;
