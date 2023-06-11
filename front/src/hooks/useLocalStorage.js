import { useState, useEffect } from 'react';
//Función para guardar datos locales en la computadora del usuario. Funge como "backup" en caso de no conectar.
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    //Checa si existe un valor previamente guardado
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  // Si hay valores guardados, se actualizan los valores
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;