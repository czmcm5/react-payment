import { InsertPayload } from '../../../model/card';
interface UpdateForm {
    color: (color: string) => void;
    cardNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
    MM: (e: React.ChangeEvent<HTMLInputElement>) => void;
    YY: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: (e: React.ChangeEvent<HTMLInputElement>) => void;
    CVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cardpw1: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cardpw2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const AddCardForm: ({ form, update, }: {
    form: InsertPayload;
    update: UpdateForm;
}) => import("react/jsx-runtime").JSX.Element;
export default AddCardForm;
