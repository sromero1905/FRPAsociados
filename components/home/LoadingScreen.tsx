/* eslint-disable @next/next/no-img-element */
"use client"; // Necesario para usar hooks

import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";

const LoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const [stylesLeft, apiLeft] = useSpring(() => ({
    transform: "translateX(20%)",
    config: { duration: 14000 },  // Duración aumentada para un movimiento más lento
  }));

  const [stylesRight, apiRight] = useSpring(() => ({
    transform: "translateX(-20%)",
    config: { duration: 14000 },  // Duración aumentada para un movimiento más lento
  }));

  useEffect(() => {
    const timeout = setTimeout(() => {
      apiLeft.start({ transform: "translateX(60%)" });
      apiRight.start({ transform: "translateX(-65%)", onRest: onLoaded });
    }, 1700);

    return () => clearTimeout(timeout);
  }, [apiLeft, apiRight, onLoaded]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Línea vertical */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-20"></div>
        {/* Clip-path para ocultar los logos detrás de la línea */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between overflow-hidden">
          <div className="relative w-1/2 h-full" style={{ clipPath: "inset(0 0 0 50%)" }}>
            <animated.div style={stylesLeft} className="absolute left-0 flex items-center justify-center w-full h-full">
              <img src="/logo-left.png" alt="Logo Izquierdo" className="w-24" />
            </animated.div>
          </div>
          <div className="relative w-1/2 h-full" style={{ clipPath: "inset(0 50% 0 0)" }}>
            <animated.div style={stylesRight} className="absolute right-0 flex items-center justify-center w-full h-full">
              <img src="/logo-right.png" alt="Logo Derecho" style={{ width: '13.5rem' }} />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
