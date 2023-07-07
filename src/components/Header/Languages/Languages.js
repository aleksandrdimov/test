import "./Languages.scss";

const Languages = () => {
  return (
    <div className="switch-field">
      <input type="radio" id="radio-one" name="switch-one" value="ua" checked />
      <label htmlFor="radio-one">UA</label>
      <input type="radio" id="radio-two" name="switch-one" value="en" />
      <label htmlFor="radio-two">EN</label>
    </div>
  );
};
export default Languages;
