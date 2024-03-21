import { FormikErrors } from "formik";

export const InitialValues = {
  email: "",
  password: "",
};

export interface LoginValues {
  email: string;
  password: string;
}

export interface FormikFormProps {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  errors: FormikErrors<LoginValues>;
  touched: { [key: string]: boolean };
  getFieldProps: (nameOrOptions: any) => any;
}
