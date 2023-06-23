const FormButton = ({ isSubmitting }) => {
  return (
    <button className="form__button" type="submit" disabled={isSubmitting}>
      Відправить
    </button>
  );
};

export default FormButton;
