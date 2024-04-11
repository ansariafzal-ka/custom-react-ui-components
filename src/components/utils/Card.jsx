const Card = ({ title, children, variant, className }) => {
  const variantClasses = {
    primary: "bg-blue-100 text-blue-900 border-blue-500",
    secondary: "bg-gray-100 text-gray-900 border-gray-500",
    success: "bg-green-100 text-green-900 border-green-500",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-400",
    danger: "bg-red-100 text-red-900 border-red-500",
    violet: "bg-violet-100 text-violet-900 border-violet-500",
    solid: "bg-black text-white border-gray-400",
    outlined: "bg-transparent text-black border-black",
  };

  const variantclassName = variantClasses[variant] || variantClasses.primary;

  return (
    <div
      className={`p-4 border border-t-4 rounded w-full ${variantclassName} ${className}`}
    >
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <div className="flex flex-col gap-y-3 justify-start items-start">
        {children}
      </div>
    </div>
  );
};

export default Card;
