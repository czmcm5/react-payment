import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractNumber } from '../utils/card';

const useAddCard = () => {
  const Navigate = useNavigate();
  const [color, setColor] = useState('gray');
  const [cardNum, setCardNum] = useState('');
  const [MM, setMM] = useState('');
  const [YY, setYY] = useState('');
  const [name, setName] = useState('');
  const [CVCcode, setCVCcode] = useState('');
  const [cardPw1, setCardPw1] = useState('');
  const [cardPw2, setCardPw2] = useState('');

  const form = {
    color,
    cardNum,
    MM,
    YY,
    name,
    CVCcode,
    cardPw1,
    cardPw2,
  };

  const updateColor = (color: string) => setColor(color);

  const updateCardnum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = extractNumber(e.target.value);
    const formatted = value
      .match(/.{1,4}/g)
      ?.join('-')
      .slice(0, 19);

    setCardNum(formatted ?? '');
  };

  const updateMM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = extractNumber(e.target.value);
    if (parseInt(value) > 12 || value === '00') return;
    setMM(value);
  };

  const updateYY = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYY(extractNumber(e.target.value));
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const updateCVC = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCVCcode(extractNumber(e.target.value));
  const updatePw1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardPw1(extractNumber(e.target.value));
  const updatePw2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardPw2(extractNumber(e.target.value));

  const update = {
    color: updateColor,
    cardNum: updateCardnum,
    MM: updateMM,
    YY: updateYY,
    name: updateName,
    CVC: updateCVC,
    cardpw1: updatePw1,
    cardpw2: updatePw2,
  };

  const submit = () => {
    if (Object.values(form).some((value) => value === '')) {
      return alert('모든 항목을 채워주세요.');
    }

    Navigate('/add-sucess', {
      state: { card: form },
    });
  };

  return { form, update, submit };
};

export default useAddCard;
