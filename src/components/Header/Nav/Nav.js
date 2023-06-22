import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Компанія
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Продукція
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Статті
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Рішення
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Контакти
          </a>
        </li>
        <li className="nav__item nav__tel">0 (800) 00-00-00</li>
      </ul>
    </nav>
  );
};

export default Nav;
