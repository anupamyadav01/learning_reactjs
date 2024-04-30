const Header = () => {
  const navBar = ["Home", "About", "Services", "FAQ", "Contact"];
  const navLinks = navBar.map((item, index) => {
    if (item === "Home") {
      return (
        <li
          className="text-center bg-pink-800 text-white w-1/5 uppercase text-lg py-2"
          key={item + index}
        >
          {item}
        </li>
      );
    }
    return (
      <li
        className="text-center uppercase text-lg w-1/5 py-2"
        key={item + index}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="">
      <div>
        <h1 className="text-5xl text-rose-800 mb-2">Family Wellness</h1>
        <p className="uppercase tracking-widest mb-2">Message Therapy</p>
      </div>
      <nav className="mt-2 mb-4">
        <ul className="flex bg-gray-400 justify-between	">{navLinks}</ul>
      </nav>
    </div>
  );
};

export default Header;
