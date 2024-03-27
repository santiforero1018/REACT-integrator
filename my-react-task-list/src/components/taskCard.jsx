export function Task(props) {
    const {task, onCheckClick, onRemoveClick, isComplete} = props;

    function handleCheckClick(){
        onCheckClick(task);
    }

    function handleRemoveClick(){
        onRemoveClick(task);
    }

    return <li>
        <h3>{task.name}</h3> 
        <button type="button" onClick={handleCheckClick}>{isComplete ? <span style={{ color: 'green' }}>✔️</span> : "✓"}</button>
        <button type="button" onClick={handleRemoveClick}>Remove</button>
    </li>
}