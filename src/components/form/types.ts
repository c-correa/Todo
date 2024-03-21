import { object, string } from "yup";
import { Task } from "../../context";

export const INITIAL_VALUES: Partial<Task> = {
    title: "",
    description: "",
    id: 0,
    is_done: false,
  }

  export const validationSchema = object().shape({
    title: string().required("Titulo es requerido"),
    description: string().required("Descripcion es requerido"),
  });