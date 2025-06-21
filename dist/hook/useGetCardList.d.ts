import { SaveCardInfo } from '../model/card';
declare const useGetCardList: () => {
    list: SaveCardInfo[];
    info: SaveCardInfo;
    nextPage: () => void;
    prePage: () => void;
};
export default useGetCardList;
