import React, { useState, useEffect } from 'react';

const DayCounter = () => {
  // Estado inicial: 26 días, 15 horas, 1 minuto y 28 segundos
  const initialTimeLeft = {
    days: 26,
    hours: 15,
    minutes: 1,
    seconds: 28
  };

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  // Función para decrementar el tiempo restante
  const tick = () => {
    setTimeLeft(prevTime => {
      const newTime = { ...prevTime };

      if (newTime.seconds > 0) {
        newTime.seconds -= 1;
      } else {
        if (newTime.minutes > 0) {
          newTime.minutes -= 1;
          newTime.seconds = 59;
        } else {
          if (newTime.hours > 0) {
            newTime.hours -= 1;
            newTime.minutes = 59;
            newTime.seconds = 59;
          } else {
            if (newTime.days > 0) {
              newTime.days -= 1;
              newTime.hours = 23;
              newTime.minutes = 59;
              newTime.seconds = 59;
            }
          }
        }
      }

      return newTime;
    });
  };

  // UseEffect para actualizar el contador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[200px] md:h-[200px] sm:h-[100px] phone:h-[100px] mini:h-[100px] w-full object-cover bg-gradient-to-r from-sky-600 to-indigo-700 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center justify-center">
    <div className='flex flex-nowrap text-center space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-28'>
      <div className='flex flex-col items-center'>
        <span>{timeLeft.days}</span>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Días</p>
      </div>
      <div className='flex flex-col items-center'>
        <span>{timeLeft.hours}</span>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Horas</p>
      </div>
      <div className='flex flex-col items-center'>
        <span>{timeLeft.minutes}</span>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Minutos</p>
      </div>
      <div className='flex flex-col items-center'>
        <span>{timeLeft.seconds}</span>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Segundos</p>
      </div>
    </div>
  </div>
);
};



export default DayCounter;