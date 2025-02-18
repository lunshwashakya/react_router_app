import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().email('Email address is not valid').required('Email is required!'),
    mobile: yup.string().optional(),
    message: yup.string().min(20,'Message should be at least 20 characters!').max(100,'Message should be less than 100 characters!').required('Message is required!')
  })
  .required()

  export default schema;