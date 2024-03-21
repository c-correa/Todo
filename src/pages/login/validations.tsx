import * as Yup from "yup";

export const LoginValidation = Yup.object().shape({
  email: Yup.string().email("Correa invalido").required("Correo es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
});
