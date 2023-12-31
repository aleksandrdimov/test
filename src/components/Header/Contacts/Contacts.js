import Burger from "../Burger/Burger";
import Languages from "../Languages/Languages";
import "./Contacts.scss";

const Contacts = ({ blur, setBlur, setForm, form }) => {
  // const { blur, setBlur, setForm, form } = useMyHook();
  const handleClick = () => {
    setForm(!form);
    setBlur(!blur);
  };
  return (
    <div className="contacts">
      <p className="contacts__tel">0 (800) 00-00-00</p>
      <button className="contacts__button" onClick={handleClick}>
        Зв’язатись
      </button>
      <Languages />
      <Burger />
    </div>
  );
};

export default Contacts;
