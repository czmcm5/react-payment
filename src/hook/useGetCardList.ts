import { useState } from 'react';
import { SaveCardInfo } from '../model/card';

const useGetCardList = () => {
  const cardList: SaveCardInfo[] = JSON.parse(
    localStorage.getItem('cardList') || '[]',
  );

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage === cardList.length - 1) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const prePage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  return { list: cardList, info: cardList[currentPage], nextPage, prePage };
};

export default useGetCardList;
