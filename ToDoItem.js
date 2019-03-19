import React from 'react';
import styles from './App.module.css';

function ToDoItem(props) {
    console.log("todoitem render");
    let completedToDo = styles.todoText, toDoTextElement;

    if (props.toDoDetails.toDoCompletedStatus) {
        completedToDo = styles.completed;
    }

    if (props.toDoDetails.toDoUpdateStatus) {
        toDoTextElement = (<input
            type="text" value={props.toDoDetails.toDoText}
            onChange={(event) => props.updateItem(event, props.toDoDetails.toDoId)}
            onKeyUp={(event) => updateToDo(event, props.toDoDetails.toDoId)}>
        </input>);
    } else {
        toDoTextElement = (<p className={completedToDo} >{props.toDoDetails.toDoText}</p>);
    }

    const updateToDo = function (event, todoId) {
        if (event.keyCode === 13) {
            props.updateToDoStatus(todoId);
        }
    }


    return (
        <div className={styles.todoItem} id={props.toDoDetails.toDoId}>
            <input type="checkbox" onClick={() => props.setSelectedStatus(props.toDoDetails.toDoId)} />
            {toDoTextElement}
            <button className={styles.doneBtn} onClick={() => props.markCompleted(props.toDoDetails.toDoId)}>Done</button>
            <button className={styles.deleteBtn} onClick={() => props.deleteItem(props.toDoDetails.toDoId)}>Delete</button>
            <button className={styles.updateBtn} onClick={() => props.updateToDoStatus(props.toDoDetails.toDoId)} >Update</button>
        </div>
    );
}
ToDoItem = React.memo(ToDoItem);

export default ToDoItem;