import '../style/pageTitle.css';

export interface TitleProps {
  line?: '' | 'line' | 'short-line';
  text: string;
}

export const PageTitle = ({ line = '', text }: TitleProps) => {
  const mode = line ? `pageTitle--${line}` : '';

  return <div className={['storybook-pageTitle', mode].join(' ')}>{text}</div>;
};
