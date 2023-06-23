import "./ModalThanks.scss";
import arrow from "../../../images/arrow.svg";

const ModalThanks = ({ hideForm, formThanks, setFormThanks }) => {
  const handleClick = () => {
    hideForm();
    setFormThanks(!formThanks);
  };
  return (
    <div className="modal" onClick={handleClick}>
      <img src={arrow} className="modal__arrow" />
      <h2 className="modal__title">Дякуємо за заявку!</h2>
      <p className="modal__text">Ваші дані успішно надіслані!</p>
      <p className="modal__advice">Press modal to close</p>
    </div>
  );
};

export default ModalThanks;
