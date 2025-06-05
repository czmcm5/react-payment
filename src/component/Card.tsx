import { InsertPayload } from "../model/card";
import styles from "../style/card.module.css";
import { maskCardNumber } from "../utils/card";
import { colorList } from "./SelectColor";
import styled from "styled-components";

interface CardProps {
  form: InsertPayload;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Card = ({ form, size = "medium", ...props }: CardProps) => {
  const bgColor =
    colorList[form.color as keyof typeof colorList] ?? colorList.default;
  return (
    <CardView
      className={styles[size]}
      {...props}
      style={{ backgroundColor: bgColor }}
    >
      <CardName>{form.name}카드</CardName>
      <Chip />
      <CardNum>{maskCardNumber(form.cardNum)}</CardNum>
      <CardDate>{`${form.MM}/${form.YY}`}</CardDate>
    </CardView>
  );
};
export default Card;

const CardView = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 3% 5%;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 1px #d5d5d5;
`;
const CardName = styled.div`
  height: 1rem;
  font-size: 12px;
`;
const Chip = styled.div`
  width: 20%;
  aspect-ratio: 3/2;
  margin: 10% 0 5% 0;
  border-radius: 4px;
  background-color: #ccb76c;
`;
const CardNum = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
`;
const CardDate = styled.div``;
