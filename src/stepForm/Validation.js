import validator from 'validator';

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
*/

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */

  validateEmptyFields(firstName,lastName,address,city,state,property,description,pricing){
    if (validator.isEmpty(firstName,lastName,address,city,state,property,description,pricing)){
        return 'This field is required';
    }
    return false;
  }

  validateZip(zip) {
    if (validator.isEmpty(zip)){
        return 'This field is required';
    }
    else if (!validator.isLength(zip, { min: 6 , max: 6 })) {
      return 'Zip Code must be a 6 digit number';
    }
    return false;
  }

  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'This field is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validatePhoneNo(phone){
    if (validator.isEmpty(phone)) {
        return 'This field is required';
      }   
    else if (!validator.isLength(phone, { min: 10 , max: 10 })){
          return 'Phone number must be a 10 digit number'
      }
    return false;
  }  

}

const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };