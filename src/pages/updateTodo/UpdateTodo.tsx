import { Form, Formik } from "formik";
import {
  CloseButton,
  ContainerForm,
  Input,
  ModalBackground,
  ModalContent,
  SubmitButton,
  Textarea,
  TodoEditValues,
} from "..";
import {  updateTodo } from "../..";
import { AUTH_ACTION, useAuthContext } from "../../context";

const Modal = ({ isOpen, onClose, task }) => {
  const { dispatch, state } = useAuthContext();
  if (!isOpen) return null;

  const handleSubmit = async (values: TodoEditValues) => {
    try {
      await updateTodo(task.id, values);

      const newTodos = state.todos.map((todo) => {
        if (todo.id === task.id) {
          return {
            ...todo,
            ...values,
          };
        }

        return todo;
      });
      dispatch({
        type: AUTH_ACTION.SET_ALL_TODOS,
        payload: { todos: newTodos },
      });

      onClose();
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
        <Formik
          initialValues={{
            title: task.title,
            description: task.description,
            is_done: task.is_done,
          }}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form>
              <ContainerForm>
              <Input
                type="text"
                name="title"
                placeholder="Título"
                value={values.title}
                onChange={handleChange}
              />
              <Textarea
                name="description"
                placeholder="Descripción"
                rows={4}
                value={values.description}
                onChange={handleChange}
              />
              <label>
                <input
                  type="checkbox"
                  name="is_done"
                  checked={values.is_done}
                  onChange={handleChange}
                />{" "}
                Tarea terminada
              </label>

              <SubmitButton type="submit" disabled={isSubmitting}>
                Enviar
              </SubmitButton>
              </ContainerForm>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalBackground>
  );
};

const EditTodo = ({ isOpen, setIsOpen, task }) => {
  return (
      <Modal isOpen={isOpen} onClose={setIsOpen} task={task} />
  );
};

export default EditTodo;
