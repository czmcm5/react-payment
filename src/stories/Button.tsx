import "./css/button.css";

export interface ButtonProps {
  shape?: "text" | "square";
  active?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  shape = "text",
  active = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = `button-${shape}--${active ? "active" : "disabled"}`;

  return (
    <div className={["storybook-button", mode].join(" ")} {...props}>
      {label}
    </div>
  );
};
