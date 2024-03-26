import { Task } from "./taskCard"

export function TaskList(props){

    const {list} = props;

    return <ul>
       {
        list.map(task => (<Task name={task.name}/>))
       }
    </ul>
}