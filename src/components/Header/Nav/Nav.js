import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link lg-nav-1">
            Компанія
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link lg-nav-2">
            продукція
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link lg-nav-3">
            Статті
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link lg-nav-4">
            Рішення
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link lg-nav-5">
            Контакти
          </a>
        </li>
        <li className="nav__item nav__tel">0 (800) 00-00-00</li>
      </ul>
    </nav>
  );
};

export default Nav;
