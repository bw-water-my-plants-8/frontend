import * as yup from "yup";

const phoneRegExp = /^\+[1-9]\d{1,14}$/;

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])[A-Za-z\d@#$!%*?&-]{8,}$/;

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("You need to have a username for your account")
    .min(3, "Username must be at least 3 characters in length"),
  firstName: yup
    .string()
    .trim()
    .required("You need to have a first name for your account")
    .min(3, "First name must be at least 3 characters in length"),
  lastName: yup
    .string()
    .trim()
    .required("You need to have a last name for your account")
    .min(3, "Last name must be at least 3 characters in length"),
  password: yup
    .string()
    .required("You must enter a password")
    .matches(
      passwordRegExp,
      "Password must be eight characters, have at least one uppercase letter and one lowercase letter, one number, and one special character"
    ),
  phone: yup.string().matches(phoneRegExp, "Please enter a valid phone number"),
  tos: yup.boolean().oneOf([true], "You must accept the Terms of Service"),
});

export default formSchema;
