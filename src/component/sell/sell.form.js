import * as yup from "yup";

export const initialValues = {
  title: "",
  description: "",
  startingPrice: 1,
  currency: "",
  city: "",
  email: "",
  phone: "",
};

// export const validate = values => {
//   const error = {}

//   if (values.firstName.length < 6) {
//     error.firstName = "Nu fi lenes!"
//   }

//   if (values.lastName.length > 7) {
//     error.lastName = "Esti baiat rau!"
//   }

//   return error
// }

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, "nu taia frunza la caini")
    .required("we need your first name"),
  images: yup.mixed(),
  description: yup
    .string()
    .max(100, "suntem creativi")
    .required("you must put a description !!"),
  startingPrice: yup.number().required("you must put a number!!"),
  currency: yup.string().required("you must select a currency!!"),
  city: yup.string().required("you must introduce your city!!"),
  email: yup.string().required("you must introduce your email!!"),
  phone: yup.string().required("you must introduce your phone number!!"),
});
