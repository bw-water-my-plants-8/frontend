import * as yup from "yup";

const LoginSchema = yup.object().shape({
  username: yup.string().trim().required("Please enter your username"),
  password: yup.string().trim().required("You must enter a password"),
});

export default LoginSchema;
