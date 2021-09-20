import * as yup from "yup";

const PlantInfoSchema = yup.object().shape({
  nickname: yup.string().trim().required("This field is required"),
  species: yup.string().trim().required("This field is required"),
  frequency: yup
    .number()
    .positive("must be a positive number")
    .required("This field is required"),
});

export default PlantInfoSchema;
