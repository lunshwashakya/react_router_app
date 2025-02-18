import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().email('Email address is not valid').required('Email is required!'),
    company: yup.string().required('Company is required!'),
    phone: yup.string().optional(),
    projectDetails: yup.string().min(20,'Description should be at least 20 characters!').max(100,'Description should be less than 100 characters!').required('Description is required!'),
    budget: yup.string().oneOf(["Less than $25K", "$25K – $50K", "$50K – $100K", "$100K+"]).required('Budget should be selected!'),
    requiredService: yup.string().oneOf(["Web application development", "Mobile application development", "Software Testing", "Other"]).required('Service should be selected!'),
  })
  .required()

  export default schema;