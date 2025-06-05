import { SaveCardInfo } from "../model/card";

const useGetCardList = () => {
  const cardList: SaveCardInfo[] = JSON.parse(
    localStorage.getItem("cardList") || "[]"
  );

  return { cardList };
};

export default useGetCardList;
