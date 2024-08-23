"use client"; // Necesario para usar hooks

import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";

const LoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const [stylesLeft, apiLeft] = useSpring(() => ({
    transform: "translateX(20%)", // Empezar un poco más cerca del centro
    config: { duration: 7000 }, // Velocidad más lenta
  }));

  const [stylesRight, apiRight] = useSpring(() => ({
    transform: "translateX(-20%)", // Empezar un poco más cerca del centro
    config: { duration: 7000 }, // Velocidad más lenta
  }));

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Animar los logos hacia el centro después de 1.5 segundos
      apiLeft.start({ transform: "translateX(50%)" });
      apiRight.start({ transform: "translateX(-50%)", onRest: onLoaded });
    }, 1700); // Tiempo de espera de 1.5 segundos

    return () => clearTimeout(timeout); // Limpiar el timeout al desmontar el componente
  }, [apiLeft, apiRight, onLoaded]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Línea vertical un poco más gruesa */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-20"></div>
        {/* Logos animados */}
        <animated.div
          style={stylesLeft}
          className="absolute left-0 flex items-center justify-center w-1/2"
        >
          <img src="/logo-left.png" alt="Logo Izquierdo" className="w-24" />
        </animated.div>
        <animated.div
          style={stylesRight}
          className="absolute right-0 flex items-center justify-center w-1/2"
        >
          <img src="/logo-right.png" alt="Logo Derecho" style={{ width: '13.5rem' }}/> {/* Ajuste del tamaño aquí */}
        </animated.div>
      </div>
    </div>
  );
};

export default LoadingScreen;