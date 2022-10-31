const displayFormError = (formRef, error) => {
  if ("response" in error && error.code !== "ERR_BAD_RESPONSE") {
    const { data: errors } = error.response;
    if ("non_field_errors" in errors) {
    } else {
      const fieldsErrors = [];
      Object.entries(errors).forEach((entry) => {
        const [key, value] = entry;
        fieldsErrors.push({
          name: key,
          errors: value,
        });
      });

      formRef.setFields(fieldsErrors);
    }
  } else{
    
  }
};

export default displayFormError;
