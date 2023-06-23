import Contacts from "./Contacts/Contacts";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import "./Header.scss";

const Header = ({ setForm, form, setBlur, blur }) => {
  return (
    <header className="header">
      <div className="wrapper header__container">
        <Logo />
        <Nav />
        <Contacts setForm={setForm} form={form} setBlur={setBlur} blur={blur} />
      </div>
    </header>
  );
};

export default Header;
