import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  // 25 * 60 para obter o tempo em segundos

  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  // Math.floor é para arredondar o número para baixo. Exemplo, se tiver 24min e 59s, deve-se exibir somente o 24

  const seconds = time % 60;
  // % é o resto da divisão

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  } 

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time]);
  // a função dentro do useEffect só executará se active ou time mudar seu valor

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}