import { useState } from "react";
import { Card, CardProps, IconButton, TaskCard } from ".";
import {
  CHECK_ICON,
  CLOSE_ICON,
  EDIT_ICON,
  TRASH_ICON,
  removeTodo,
} from "../../..";
import EditTodo from "../../../pages/updateTodo/UpdateTodo";
import { AUTH_ACTION, useAuthContext } from "../../../context";

export function Task({ task, onToggleTodo, onToggleDone }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatch, state } = useAuthContext();

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleRemoveTodo = async (id: string) => {
    try {
      await removeTodo(id);

      const newTodos = state.todos.filter((todo) => todo.id !== Number(id));
      dispatch({
        type: AUTH_ACTION.SET_ALL_TODOS,
        payload: { todos: newTodos },
      });
    } catch (error) {
      throw new Error("Error al eliminar un Todo")
    }
  };

  const handleToggle = (task_id, done: boolean) => {
    const toggleAction = done ? onToggleTodo : onToggleDone;
    toggleAction(task_id);
  };

  return (
    <div>
      <Card background={!task.is_done ? "#15101c" : "#A6C800"}>
        <TaskCard>
          <div>
            <h4 className={!task.is_done ? "is_done" : "done"}>{task.title}</h4>
            <p className={!task.is_done ? "is_done" : "done"}>{task.description}</p>
          </div>
          <div className="container-icon-card">
            <IconButton
              src={!task.is_done ? CHECK_ICON : CLOSE_ICON}
              alt="Close Icon"
              onClick={() => handleToggle(task.id, task.is_done)}
            />
            <IconButton src={EDIT_ICON} alt="Edit Icon" onClick={openModal} />
            <IconButton
              src={TRASH_ICON}
              alt="Trash Icon"
              onClick={() => handleRemoveTodo(String(task.id))}
            />
          </div>
        </TaskCard>
      </Card>
      <EditTodo isOpen={isModalOpen} setIsOpen={openModal} task={task} />
    </div>
  );
}
