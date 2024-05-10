const UpperNavbar = () => {
  return (
    <nav className="bg-[#F4F4F5]">
      <div className="flex justify-between px-6 py-2 text-md max-w-7xl mx-auto">
        <ul className="flex gap-4">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-white px-3 py-0.5">My Account</button>
          <button className="bg-white px-3 py-0.5">USD</button>
          <button className="bg-white px-3 py-0.5">EN</button>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
