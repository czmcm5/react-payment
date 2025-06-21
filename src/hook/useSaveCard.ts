import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useSaveCard = () => {
  const Navigate = useNavigate();
  const { state } = useLocation();
  const [cardNick, setCardNick] = useState('');

  useEffect(() => {
    if (!state) {
      Navigate('/add');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCardNick = (e: ChangeEvent<HTMLInputElement>) =>
    setCardNick(e.target.value.trim());

  const saveCard = () => {
    const nickname = cardNick || state.card.name;
    const newCard = { ...state.card, nickname };

    const cardList = localStorage.getItem('cardList');

    if (!cardList) {
      localStorage.setItem('cardList', JSON.stringify([newCard]));
    } else {
      try {
        const copyList = JSON.parse(cardList);
        copyList.push(newCard);
        localStorage.setItem('cardList', JSON.stringify(copyList));
      } catch (err) {
        throw new Error('cardList 파싱에 에러:' + err);
      }
    }

    Navigate('/list');
  };

  return {
    form: { ...state?.card, cardNick },
    updateCardNick,
    saveCard,
  };
};
export default useSaveCard;
