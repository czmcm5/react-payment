import { useState } from "react";
import { useLocation } from "react-router-dom";

const useSaveCard = () => {
  const location = useLocation();
  const [cardName, setCardName] = useState("");

  const saveCard = () => {};

  return {
    color: location.state.card.color,
    cardName,
    setCardName: (name: string) => setCardName(name),
  };
};
export default useSaveCard;
