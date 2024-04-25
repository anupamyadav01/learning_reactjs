import ContactCard from "../../components/ContactCard/ContactCard";
import "./styles.css";
const Contacts = () => {
  return (
    <div className="contacts_container">
      <ContactCard
        phone="9988857545"
        address="Jaipur, Rajasthan"
        email="anupamy571@gmail.com"
      />
      <ContactCard
        name="Akash Yadav"
        phone="5854874585"
        address="Lucknow, UP"
        email="aakashyadav231@gmail.com"
      />
    </div>
  );
};

export default Contacts;
