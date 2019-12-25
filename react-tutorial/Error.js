const validate = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    //...
  
    return errors;
  };
  // Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => {
  return sleep(2000).then(() => {
    const errors = {};
    if (['admin', 'null', 'pooja'].includes(values.username)) {
      errors.username = 'Well Done';
    }
    // ...
    return errors;
  });
};