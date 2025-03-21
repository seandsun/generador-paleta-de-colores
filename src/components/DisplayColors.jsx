import { SingleColor } from "./SingleColor";
import styles from './DisplayColors.module.css'

export const DisplayColors = ( {list}) => {
  return (
    <div className={styles.colorsBox}>
      {
        list.map((color, index) => (
          <SingleColor key={index} hexColor={color.hex} />
        ))
      }
    </div>
  );
};