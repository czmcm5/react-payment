export const extractNumber = (text: string) => {
  return text.replace(/\D/g, '');
};

export const maskCardNumber = (cardNum: string): string => {
  const parts = cardNum.split('-');

  return parts
    .map((part, idx) => {
      if (idx < 2) return part;
      return '*'.repeat(part.length);
    })
    .join(' ');
};
