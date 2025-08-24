const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClasses = `
    px-4 py-2 rounded-lg border rounded font-semibold text-white
    transition-all duration-300 
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
  `;
  const customClasses = className || "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${customClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
