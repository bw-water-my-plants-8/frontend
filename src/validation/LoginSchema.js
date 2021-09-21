import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().trim().required("Please enter your username"),
  password: yup.string().trim().required("You must enter a password"),
});

export default formSchema;
