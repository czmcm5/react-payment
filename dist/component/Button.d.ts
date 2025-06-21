export interface ButtonProps {
    shape?: '' | 'square';
    active?: boolean;
    label?: string;
    onClick?: () => void;
}
export declare const Button: ({ shape, active, label, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
