import "./styles.css";

const ContactCard = (props) => {
  const { name = "Default name", phone } = props;

  // const name = props.name || "User Name";
  return (
    <div className="contact_card">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Address: {props.address}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default ContactCard;
