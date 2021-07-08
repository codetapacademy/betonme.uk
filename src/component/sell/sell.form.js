import * as yup from 'yup'

export const initialValues = {firstName: '', lastName: '', description: '', startingPrice: '', currency: '', city: ''}

export const validate = values => {
  const error = {}

  if (values.firstName.length < 6) {
    error.firstName = "Nu fi lenes!"
  }

  if (values.lastName.length > 7) {
    error.lastName = "Esti baiat rau!"
  }

  return error
}

export const validationSchema = yup.object().shape({
  firstName: yup.string().min(6, "nu taia frunza la caini").required("we need your first name"),
  lastName: yup.string().max(7, "suntem creativi").required("we need your last name now !!"),
  description: yup.string().max(100, "suntem creativi").required("you must put a description !!"),
  startingPrice: yup.number().required("you must put a number!!"),
  currency: yup.string().required("you must select a currency!!"),
  city: yup.string().required("you must introduce your city!!")
})
