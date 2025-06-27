import './styles.css';

type IntroductionProps = { content: string };
type TitleProps = { title: string };
type DescriptionProps = { content: string };

export const Introduction = ({ content }: IntroductionProps) => {
  return <span className="text5">{content}</span>;
};

export const Title = ({ title }: TitleProps) => {
  return <span className="text1">{title}</span>;
};

export const Description = ({ content }: DescriptionProps) => {
  return <span className="text9">{content}</span>;
};
