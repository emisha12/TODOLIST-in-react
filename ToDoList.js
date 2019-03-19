import React from 'react';
import ToDoItem from './ToDoItem';
import styles from './App.module.css';

function ToDoList(props) {
    console.log("todolist render");
    return (
        <div>
            <div className={styles.todoWrapper}>
                {Object.keys(props.todoDetails).map(todoId => <ToDoItem key={todoId}
                    toDoDetails={props.todoDetails[todoId]}
                    markCompleted={props.markCompleted}
                    deleteItem={props.deleteItem}
                    updateToDoStatus={props.updateToDoStatus}
                    updateItem={props.updateItem}
                    setSelectedStatus={props.setSelectedStatus}
                />
                )}
            </div>

        </div>
    );
}

export default ToDoList;