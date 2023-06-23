const validateName = (values, errors) => {
    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[A-z\s]+$/.test(values.name)) {
      errors.name = "Invalid name. Only latin letters";
    }
  };
 
  const validateTel = (values, errors) => {
    if (!values.tel) {
      errors.tel = "Required";
    } else if (!/^[0-9]{12}$/.test(values.tel)) {
      errors.tel = "Invalid phone. Need 12 numbers";
    }
  };
  
  export { validateName, validateTel };
  