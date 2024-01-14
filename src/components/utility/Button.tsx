interface Props {
  content: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | undefined;
}
const Button = (props: Props) => {
  return (
    <button className={`bg-black-900 text-white p-4 rounded-full ${props.className}`} type={props.type}>{props.content}</button>
  );
};
export default Button;
