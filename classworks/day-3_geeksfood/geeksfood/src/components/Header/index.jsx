import "./styles.css";
import styles from "./styles.module.css";
import logoImage from "../images/logo.svg";

const Header = () => {
  // const navLinks = ["Home", "Quote", "Resturants", "Foods", "Contact"];
  const navLinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Quote",
      link: "../Quote/index.jsx",
    },
    {
      name: "Resturants",
      link: "https://www.geeksforgeeks.org/",
    },
    {
      name: "Foods",
      link: "https://www.geeksforgeeks.org/",
    },
    {
      name: "Contact",
      link: "https://www.geeksforgeeks.org/",
    },
  ];

  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src={logoImage} alt="" />
          <a href="https://www.geeksforgeeks.org/">GeekFoods</a>
        </div>

        <div>
          <ul>
            {navLinks.map((link, index) => (
              <a key={index} href={link.link}>
                {link.name}
              </a>
            ))}
          </ul>
        </div>

        <div>
          <button className={styles.btnStyling}>Get started</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
