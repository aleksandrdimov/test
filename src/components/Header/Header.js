import Contacts from "./Contacts/Contacts";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__container">
        <Logo />
        <Nav />
        <Contacts />
      </div>
    </header>
  );
};

export default Header;
