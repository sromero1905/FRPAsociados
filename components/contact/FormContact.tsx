import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { HiCheck } from 'react-icons/hi'; // Icono para el tilde

const schema = yup.object().shape({
  name: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email address').required('Email Address is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar el estado de éxito

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Aquí puedes agregar tu lógica de envío, como llamar a una API
      console.log('Form Data:', data);

      // Mostrar mensaje de éxito
      setSuccessMessage('Your message has been sent successfully!');
      setIsSubmitted(true); // Cambia el estado a enviado

      // Limpia el formulario después de 3 segundos
      setTimeout(() => {
        reset(); // Limpia los campos del formulario
        setSuccessMessage(null);
        setIsSubmitted(false); // Resetea el estado de éxito
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Submit Error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-12 max-w-5xl w-full relative"
      >
        {successMessage && (
          <div className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-md">
            {successMessage}
          </div>
        )}
        <h2 className="text-4xl font-light text-white mb-10 text-center tracking-wide">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className={`w-full p-4 border border-gray-800 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                )}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className={`w-full p-4 border border-gray-800 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john.doe@example.com"
                  />
                )}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mb-10">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="subject"
                  className={`w-full p-4 border border-gray-800 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-all duration-300 ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Subject of your message"
                />
              )}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>
          <div className="mb-10">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  className={`w-full p-4 border border-gray-800 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-700 focus:outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                  rows={8}
                  placeholder="Write your message here..."
                />
              )}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className={`w-full p-4 rounded-lg border border-gray-700 transition-all duration-300 ease-in-out ${isSubmitting ? 'bg-gray-700 text-gray-200' : isSubmitted ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-200'} ${isSubmitting ? 'hover:bg-gray-600' : ''} ${isSubmitted ? 'hover:bg-green-600' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2z"></path>
                </svg>
                Enviando...
              </span>
            ) : isSubmitted ? (
              <span className="flex items-center justify-center">
                <HiCheck className="w-6 h-6 mr-2" />
                Enviado
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
