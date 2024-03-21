import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import { LoginValues, TodoEditValues } from "../pages";
import { CreateTodo } from "..";

const app = feathers();
const token = localStorage.getItem("token");
const header = {
  "X-Requested-With": "FeathersJS",
  Authorization: `Bearer ${token}`,
};

const restClient = rest("https://todo-list-api-14tz.onrender.com");

app.configure(restClient.fetch(window.fetch.bind(window)));

export const authentication = async (values: LoginValues) => {
  try {
    return await app.service("authentication").create(
      {
        email: values.email,
        password: values.password,
        strategy: "local",
      },
      {
        headers: { "X-Requested-With": "FeathersJS" },
      }
    );
  } catch (error) {
    console.error("Error de autenticación:", error);
    throw error;
  }
};
export const reAuthentication = async (token: string) => {
  try {
    return await app.service("authentication").create(
      {
        accessToken: token,
        strategy: "local",
      },
      {
        headers: { "X-Requested-With": "FeathersJS" },
      }
    );
  } catch (error) {
    console.error("Error de autenticación:", error);
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    return await app.service("todo").find({
      headers: { ...header },
    });
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    throw error;
  }
};

export const getOneTask = async (id: string) => {
  try {
    return await app.service(`todo/${id}`).get({
      headers: { ...header },
    });
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    throw error;
  }
};

export const createTodo = async (values: CreateTodo) => {
  try {
    return await app.service(`todo`).create(
      {
        is_done: false,
        title: values.title,
        description: values.description,
      },
      {
        headers: { ...header },
      }
    );
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    throw error;
  }
};

export const updateTodo = async (id: string, values: TodoEditValues) => {
  try {
    return await app.service(`todo`).patch(id, values, {
      headers: { ...header },
    });
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    throw error;
  }
};

export const removeTodo = async (id: string) => {
  try {
    return await app.service(`todo`).remove(id, {
      headers: { ...header },
    });
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    throw error;
  }
};

export default app;
