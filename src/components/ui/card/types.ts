import { Task } from "../../../context";

export interface CardProps {
    onToggleTodo: (id: string) => void;
    onToggleDone: (id: string) => void;
    task: Task;
}