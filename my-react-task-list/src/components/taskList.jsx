import { useEffect, useState } from "react";
import { Task } from "./taskCard"

export function TaskList(props) {

    const { list } = props;

    const [tasks, setTask] = useState(list);
    const [newTaskName, setNewTaskName] = useState("");


    // Add task handling function

    const addTask = (name) => {

        setTask([...tasks, { name, isComplete: false }]);

        setNewTaskName("");

    };
    // function to check a task
    const handleCheckClick = (Etask) => {
        

        if (!tasks.some(task => task.name === Etask.name)) {
            console.log("tasks checked: " + Etask.name);
            setTask([...tasks, Etask]);
        } else {
            console.log("tasks unchecked: " + Etask.name);
            setTask(tasks.map(task => task.name === Etask.name ? { ...task, isComplete: !task.isComplete } : task));
        }
    }

    // function to remove a task
    const handleRemoveClick = (Etask) => {

        console.log("task removed: " + Etask.name);

        setTask([...tasks].filter(task => Etask != task));

    }

    return (
        <>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter new todo"/>
            <button type="button" onClick={() => addTask(newTaskName)}>+</button>
            <ul>
                {
                    tasks.map(task => (<Task task={task} onCheckClick={handleCheckClick} onRemoveClick={handleRemoveClick} isComplete={task.isComplete} />))
                }
            </ul></>
    );


}