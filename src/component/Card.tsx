import styles from "../style/card.module.css";

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

const colorList = {
  red: "#e24141",
  blue: "#547ce4",
  green: "#7dbf73",
  coolPink: "#d959b7",
  mint: "#85dec8",
  warmPink: "#E76E9A",
  organge: "#F26D3D",
  yellow: "#F2BC57",
  default: "lightGray",
};
