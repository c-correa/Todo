import { useContext, useEffect } from "react";
import { Task, updateTodo, useUser } from "../..";

import FormComponent from "../../components/form/FormComponent";
import { ContainerHome, ContainerTask } from "..";
import { AUTH_ACTION, AuthContext } from "../../context";

export function HomeTodo() {
  const { getAllTodos } = useUser();
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  const handleToggle = async (id: string, done: boolean) => {
    await updateTodo(id, { is_done: done });
    const newTodos = state.todos.map((task) => {
      if (task.id === +id) {
        task.is_done = done;

        return task;
      }

      return task;
    });

    dispatch({ type: AUTH_ACTION.SET_ALL_TODOS, payload: { todos: newTodos } });
  };

  const completedTasks = state.todos.filter((task) => task.is_done);
  const unCompletedTasks = state.todos.filter((task) => !task.is_done);

  return (
    <ContainerHome>
      <FormComponent />
      <h3>Task to do</h3>
      <ContainerTask className="scroll">
        {unCompletedTasks.length === 0 && <p>No hay tareas pendientes</p>}
        {unCompletedTasks.map((task) => (
          <Task
            key={`${task.id}-un-done`}
            task={task}
            onToggleTodo={() => handleToggle(String(task.id), false)}
            onToggleDone={() => handleToggle(String(task.id), true)}
          />
        ))}
      </ContainerTask>
      <h3>Done</h3>
      <ContainerHome className="scroll">
        {completedTasks.length === 0 && <p>No hay tareas completadas</p>}
        {completedTasks.map((task) => (
          <Task
            key={`${task.id}-done`}
            task={task}
            onToggleTodo={() => handleToggle(String(task.id), false)}
            onToggleDone={() => handleToggle(String(task.id), true)}
          />
        ))}
      </ContainerHome>
    </ContainerHome>
  );
}
