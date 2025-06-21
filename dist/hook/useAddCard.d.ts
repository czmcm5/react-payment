interface Values {
    color: string;
    cardNum: string;
    MM: string;
    YY: string;
    name: string;
    CVCcode: string;
    cardPw1: string;
    cardPw2: string;
}
interface Props {
    onSubmit?: (formValue: Values) => void;
}
declare const useAddCard: ({ onSubmit }: Props) => {
    form: {
        color: string;
        cardNum: string;
        MM: string;
        YY: string;
        name: string;
        CVCcode: string;
        cardPw1: string;
        cardPw2: string;
    };
    update: {
        color: (color: string) => void;
        cardNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
        MM: (e: React.ChangeEvent<HTMLInputElement>) => void;
        YY: (e: React.ChangeEvent<HTMLInputElement>) => void;
        name: (e: React.ChangeEvent<HTMLInputElement>) => void;
        CVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
        cardpw1: (e: React.ChangeEvent<HTMLInputElement>) => void;
        cardpw2: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    submit: () => void;
};
export default useAddCard;
