const Button = ({ isPrimary, text }) => {
  return (
    <button
      className={`text-lg font-semibold rounded-lg px-6 py-3 ${
        isPrimary
          ? "bg-primary text-primary-content hover:bg-primary/80"
          : "bg-secondary text-secondary-content hover:bg-secondary/80"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
