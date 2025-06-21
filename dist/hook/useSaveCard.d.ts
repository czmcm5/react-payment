import { ChangeEvent } from 'react';
declare const useSaveCard: () => {
    form: any;
    updateCardNick: (e: ChangeEvent<HTMLInputElement>) => void;
    saveCard: () => void;
};
export default useSaveCard;
