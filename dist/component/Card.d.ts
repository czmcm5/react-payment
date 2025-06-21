import { SaveCardInfo } from '../model/card';
interface CardProps extends Pick<SaveCardInfo, 'color' | 'cardNum' | 'MM' | 'YY' | 'name'> {
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}
declare const Card: ({ color, cardNum, MM, YY, name, size, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
