import "../style/button.css";

export interface ButtonProps {
  shape?: "" | "square";
  active?: boolean;
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  shape = "",
  active = false,
  label = "버튼",
  ...props
}: ButtonProps) => {
  const mode = `${shape}-${active ? "active" : "disabled"}`;

  return (
    <div className={["basic-button", mode].join(" ")} {...props}>
      {label}
    </div>
  );
};
