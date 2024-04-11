import { useState } from "react";

const CollapseCard = ({ title, children, variant, className }) => {
  const [toggle, setToggle] = useState(false);

  const toggleExpand = () => {
    setToggle(!toggle);
  };

  const variantClasses = {
    primary: "bg-blue-100 text-blue-900 border-blue-500",
    secondary: "bg-gray-100 text-gray-900 border-gray-500",
    success: "bg-green-100 text-green-900 border-green-500",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-400",
    violet: "bg-violet-100 text-violet-900 border-violet-500",
    danger: "bg-red-100 text-red-900 border-red-500",
    solid: "bg-black text-white border-gray-500",
    outlined: "bg-transparent text-black border-black",
  };
  const variantclassName = variantClasses[variant] || variantClasses.primary;

  return (
    <div
      className={`p-4 border border-t-4 rounded w-full ${variantclassName} ${className}`}
    >
      <div className="flex flex-row justify-between gap-2 items-center mb-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <button onClick={toggleExpand} className="font-medium text-3xl">
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && (
        <div className="flex flex-col gap-y-3 justify-start items-start">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapseCard;
