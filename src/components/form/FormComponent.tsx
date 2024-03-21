import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import Icon from "../ui/Icon/Icon";
import {
  FormContainer,
  INITIAL_VALUES,
  IconWrapper,
  InputContainer,
  SubmitButton,
  validationSchema,
} from "..";
import Input from "../ui/InputField/InputField";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AUTH_ACTION, AuthContext, Task } from "../../context";
import { createTodo } from "../..";

const FormComponent = () => {
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (values: Partial<Task>, formikHelpers: FormikHelpers<Partial<Task>>) => {
    try {
      const data = await createTodo(values);

      dispatch({ type: AUTH_ACTION.ADD_TASK, payload: { task: { ...data } } });

      toast.success("¡La tarea se creó correctamente!");
      formikHelpers.resetForm()
    } catch (error) {
      console.error("Error al crear tarea:", error);
      toast.error(`Se produjo un error`);
    }
  };

  return (
    <Formik<Partial<Task>>
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers)=> handleSubmit(values, formikHelpers)}
    >
      {({ isSubmitting, values, handleChange }) => (
        <Form>
          <FormContainer>
            <InputContainer>
              <Input
                onChange={handleChange}
                type={"text"}
                value={values.title}
                name="title"
                placeholder="Título"
              />{" "}
              <ErrorMessage name="title" component="div" className="error" />
            </InputContainer>
            <InputContainer>
              <Input
                onChange={handleChange}
                type={"text"}
                value={values.description}
                name="description"
                placeholder="Description"
              />{" "}
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </InputContainer>
            <SubmitButton type="submit" disabled={isSubmitting}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SubmitButton>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
