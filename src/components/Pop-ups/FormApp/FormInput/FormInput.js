import { ErrorMessage, Field } from "formik";

const FormInput = ({ type, name }) => {
  return (
    <div className="form__input">
      {type === "tel" ? (
        <Field type={type} name={name} placeholder="38XXXXXXXXXX" />
      ) : (
        <Field type={type} name={name} placeholder={name} />
      )}
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
};

export default FormInput;
