import './styles.css';

type IntroductionProps = { content: string; size?: number };
type TitleProps = { title: string; size?: number };
type DescriptionProps = { content: string; size?: number };

export const Introduction = ({ content, size }: IntroductionProps) => {
  return (
    <span style={{ fontSize: `${size}rem` }} className="introduction">
      {content}
    </span>
  );
};

export const Title = ({ title, size }: TitleProps) => {
  return (
    <span style={{ fontSize: `${size}rem` }} className="title">
      {title}
    </span>
  );
};

export const Description = ({ content, size }: DescriptionProps) => {
  return (
    <span style={{ fontSize: `${size}rem` }} className="description">
      {content}
    </span>
  );
};
