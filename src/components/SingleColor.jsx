import { useState } from 'react';
import Click from '/copy.svg';
import styles from './SingleColor.module.css'

export const SingleColor = ({ hexColor }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (color) => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className={styles.singleCard} style={{ backgroundColor: `#${hexColor}` }}>
      <div className={styles.content}>
        <p>#{hexColor}</p>
        <button onClick={() => handleCopy(hexColor)}>
          <img src={Click} alt="copy icon" />
        </button>
      </div>
      {copy && <p className={styles.copyAlert}>Copiado en el portapapeles</p>}
    </div>
  );
};
