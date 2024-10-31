const Button = ({ isPrimary, text }) => {
  return (
    <button
      className={`text-lg font-semibold rounded-lg px-6 py-3 ${
        isPrimary
          ? "bg-primary text-primary-content"
          : "bg-secondary text-secondary-content"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
