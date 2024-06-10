interface ButtonProps {
  onClick: () => void;
  children: string;
}

const NeonButton = ({ onClick, children }: ButtonProps) => {
  return (
    <a onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
};

export default NeonButton;
