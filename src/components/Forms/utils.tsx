import * as Yup from "yup";

export const validation = Yup.object({
        email: Yup.string()
          .required("Required")
          .email("It's should be emile."),
        password: Yup.string()
          .required("Password is required.")
          .min(8, "Your password is too short.")
          .matches(/[a-zA-Z]/, "Password must contain latin letters and numbers."),
        confirm: Yup.string()
          .required("Confirm password is required.")
          .oneOf([Yup.ref("password"), null], "Passwords must match."),
        where: Yup.string().required("Please select something this field cannot be empty."),
        message: Yup.string()
          .required("Please leave a message, this field cannot be empty.")
          .min(20, "Your message must contain at least 20 characters."),
      })
