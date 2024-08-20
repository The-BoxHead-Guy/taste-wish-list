function ConfirmationButton({ children, onButtonClick, className }) {
  return (
    <button className={className} onClick={onButtonClick}>
      {children}
    </button>
  );
}

export default ConfirmationButton;
