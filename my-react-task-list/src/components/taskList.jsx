import { useEffect, useState } from "react";
import { Task } from "./taskCard"
import { useTodo } from "../hooks/useTodo";

export function TaskList(props) {

    const { list } = props;

    const [tasks, addTask, Check, Remove] = useTodo(list);
    const [newTaskName, setNewTaskName] = useState("");

    const handleAddTask = (taskName) => {
        addTask(taskName);
    }

    const handleCheckClick = (task) => {
        Check(task);
    }

    const handleRemoveClick = (task) => {
        Remove(task);
    }

    return (
        <>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter new todo" />
            <button type="button" onClick={() => handleAddTask(newTaskName)}>+</button>
            <ul>
                {
                    tasks.map(task => (<Task task={task} onCheckClick={handleCheckClick} onRemoveClick={handleRemoveClick} isComplete={task.isComplete} />))
                }
            </ul></>
    );


}