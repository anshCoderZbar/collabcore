import { object, string } from "yup";

export const signInSchema = object({
  email: string()
    .required("Email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email must be a valid email"
    ),
  password: string()
    .required("Password is required")
    .matches(/^(?=.*?[A-Z])/, "Password must contains one uppercase letter")
    .matches(/^(?=.*?[a-z])/, "Password must contains lowecase letter")
    .matches(/^(?=.*?[0-9])/, "Password must contains one digit")
    // .matches(/^(?! ).*[^ ]$/, "Empty spaces are not allowed")
    .matches(
      /^(?=.*?[#?!@$%^&*-])/,
      "Password must contains one special character"
    )
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const onboardSchema = object({
  select: string().required("type is required"),
  profileName: string().required("name is required"),
  userName: string().required("user name is required"),
});
