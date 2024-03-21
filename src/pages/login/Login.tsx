import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import {
  Container,
  InputField,
  LoginForm,
  MessageError,
  LoginButton,
} from "./style";
import { LoginValidation } from "./validations";
import { InitialValues, LoginValues, FormikFormProps } from "./types";
import { useUser } from "../../hook/useUser";

export function Login() {
  const [error, setError] = useState();
  const { login } = useUser();

  const handleSubmit = async (values: LoginValues) => {
    try {
      await login(values);
    } catch (error: any) {
      setError(error.message || "Error de autenticación");
    }
  };

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnChange
      validationSchema={LoginValidation}
    >
      {({ handleSubmit, errors, touched, getFieldProps }: FormikFormProps) => (
        <Container>
          <LoginForm onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <InputField
              type="text"
              placeholder="example@gmail.com"
              {...getFieldProps("email")}
            />
            <ErrorMessage name="email" component={MessageError} />
            <InputField
              type="password"
              placeholder="Password"
              {...getFieldProps("password")}
            />
            {touched.password && errors.password ? (
              <MessageError>{errors.password}</MessageError>
            ) : null}
            {error && <MessageError>{error}</MessageError>}
            <LoginButton type="submit">Login</LoginButton>
          </LoginForm>
        </Container>
      )}
    </Formik>
  );
}
