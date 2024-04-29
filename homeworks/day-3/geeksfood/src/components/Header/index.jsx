import "./styles.css";
import styles from "./styles.module.css";
import logoImage from "../images/logo.svg";

const Header = () => {
  const navLinks = ["Home", "Quote", "Resturants", "Foods", "Contact"];

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
              <li key={index}>{link}</li>
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
