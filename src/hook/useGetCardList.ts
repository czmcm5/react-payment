import { useState } from "react";
import { CardInfo } from "../interface/card";

const useGetCardList = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);
  const [pageNum, setPageNum] = useState(0);

  return { card: cardList[pageNum] || null };
};

export default useGetCardList;
