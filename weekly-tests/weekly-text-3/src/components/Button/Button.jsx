const Button = ({ btnName, navi }) => {
  return (
    <button
      onClick={() => navi()}
      className="font-bold px-20 py-2 border-2 border-blue-400 rounded-full mt-10 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-blue-400 hover:border-2 hover:border-transparent"
    >
      {btnName}
    </button>
  );
};

export default Button;
