import styles from "../style/card.module.css";
import { colorList } from "./SelectColor";

interface CardProps {
  size?: "small" | "medium" | "large";
  color?: string;
  onClick?: () => void;
}

const Card = ({ color = "", size = "medium", ...props }: CardProps) => {
  const bgColor =
    colorList[color as keyof typeof colorList] ?? colorList.default;

  return (
    <div
      className={`${styles["basic-card"]} ${styles[size]}`}
      {...props}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.company}>현석카드</div>
      <div className={styles.chip} />
      <div className={styles.number}>1111 2222 **** ****</div>
      <div className={styles.name}>SSS</div>
    </div>
  );
};
export default Card;
