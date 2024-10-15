import React, { useEffect, useState } from "react";
import { Hours } from "./style";
import classNames from "classnames";

const MyHours = () => {
' '
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [result, setResult] = useState('');

  useEffect(() => {
    // Atualiza a cada segundo
    const intervalId = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime.toLocaleTimeString());
      closedOrOpen(newTime.getHours()); // Chama a função para atualizar o estado
    }, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const currentHour = new Date().getHours();

  //   decidindo a classe que vai ser

  const buttonClass = classNames({
    oppen: currentHour >= 7 && currentHour < 22,
    closed: currentHour < 7 || currentHour >= 22,
  });

  const closedOrOpen = (currentHour) =>{
    if(currentHour >= 7 && currentHour < 22){
        setResult('Aberto')
    } else{
        setResult('Fechado')
    }
  }

  return (
    <Hours className={buttonClass}>
      <h5>07:00 - 22:00</h5>
    </Hours>
  );
};

export default MyHours;
