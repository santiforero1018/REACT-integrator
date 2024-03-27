import { useEffect, useState } from "react";
import { Task } from "./taskCard"

export function TaskList(props) {

    const { list } = props;

    const [tasks, setTask] = useState(list || []);
    const [newTaskName, setNewTaskName] = useState("");

    // Add task handling function

    const addTask = (name) => {
        const newTasks = [...tasks, { name, isComplete: false }]
        setTask(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setNewTaskName("");

    };
    // function to check a task
    const handleCheckClick = (Etask) => {

        let newChecks;
        if (!tasks.some(task => task.name === Etask.name)) {
            console.log("tasks checked: " + Etask.name);
            newChecks = [...tasks, Etask];
        } else {
            console.log("tasks unchecked: " + Etask.name);
            newChecks = tasks.map(task => task.name === Etask.name ? { ...task, isComplete: !task.isComplete } : task);
        }

        setTask(newChecks);
        localStorage.setItem('tasks', JSON.stringify(newChecks));
    }

    // function to remove a task
    const handleRemoveClick = (Etask) => {
        console.log("task removed: " + Etask.name);
        const newTasks = [...tasks].filter(task => Etask != task);
        setTask(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTask(savedTasks);
        }
    }, []);

    return (
        <>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter new todo" />
            <button type="button" onClick={() => addTask(newTaskName)}>+</button>
            <ul>
                {
                    tasks.map(task => (<Task task={task} onCheckClick={handleCheckClick} onRemoveClick={handleRemoveClick} isComplete={task.isComplete} />))
                }
            </ul></>
    );


}