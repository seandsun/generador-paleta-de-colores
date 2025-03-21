import { useState } from 'react';
import Values from 'values.js';
import styles from './FormColor.module.css';

export const FormColor = ({ setList }) => {
  const [color, setColor] = useState('red');
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className={styles.formColor}>
      <h1>Color Palette Generator</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="#fff"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generar" />
      </form>
      {error && <p className={styles.error}>Debe ingresar un valor válido</p>}
    </div>
  );
};
