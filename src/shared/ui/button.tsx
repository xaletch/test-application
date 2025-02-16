interface ButtonProps {
  children?: React.ReactNode;
  cl?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
export const Button = ({ children, cl, type, onClick }: ButtonProps) => {
  return (
    <button className={`cursor-pointer ${cl}`} type={type} onClick={onClick}>{children}</button>
  )
}
