import { Form, Formik } from "formik";
import "./Form.scss";
import FormInput from "./FormInput/FormInput";
import { validateName, validateTel } from "./validate/validate";
import FormButton from "./FormButton/FormButton";

const FormApp = ({ hideForm, formThanks, setFormThanks }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      setFormThanks(!formThanks);
    }, 400);
    // setTimeout(() => {
    //   // setFormThanks(formThanks === false);
    //   hideForm();
    // }, 1000);
  };

  const handleValidateAll = (values) => {
    const errors = {};
    validateName(values, errors);
    validateTel(values, errors);
    return errors;
  };
  return (
    <div className={formThanks ? "form form_block" : "form"}>
      <div className="form__exit" onClick={hideForm}>
        <span></span>
      </div>
      <div className="form__container">
        <h2 className="form__title">Залишайте заявку</h2>
        <p className="form__text">Ми зв’яжемося з вами найближчим часом.</p>
        <Formik
          initialValues={{ name: "", tel: "" }}
          validate={handleValidateAll}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form__formik">
              <FormInput type="text" name="name" />
              <FormInput type="tel" name="tel" />
              <FormButton isSubmitting={isSubmitting} />
            </Form>
          )}
        </Formik>
        <p className="form__explanation">
          Натискаючи кнопку “Надіслати”, ви погоджуєтесь з{" "}
          <a href="#" className="form__link">
            Правилами обробки персональних даних
          </a>{" "}
          .
        </p>
      </div>
    </div>
  );
};

export default FormApp;
