import "./css/PageTitle.css";

export interface TitleProps {
  line?: "" | "line" | "short-line";
  text: string;
}

export const InputBox = ({ line = "", text }: TitleProps) => {
  const mode = line ? `pageTitle--${line}` : "";

  return <div className={["storybook-pageTitle", mode].join(" ")}>{text}</div>;
};
