const InputField = ({ placholder, type, name, id, variant, className }) => {
  const variantClasses = {
    primary: "border-blue-500 placeholder-blue-500",
    secondary: "border text-black",
    success: "border-green-500 placeholder-green-500",
    warning: "border-yellow-500 placeholder-yellow-500",
    danger: "border-red-500 placeholder-red-500",
    violet: "border-violet-500 placeholder-violet-500",
    solid: "border-white bg-black placeholder-white text-white",
    outlined: "bg-white border-black placeholder-black text-black",
  };

  const variantclassName = variantClasses[variant] || variantClasses.primary;

  return (
    <input
      placeholder={placholder}
      type={type}
      name={name}
      id={id}
      className={`px-3 py-1 border rounded outline-none ${variantclassName} ${className}`}
    />
  );
};

export default InputField;
