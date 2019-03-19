import React from 'react';
import styles from './App.module.css';

function ToDoActionBar(props) {
    console.log("todoactionbar render");
    return (
        <div>
            <h1> To do List...</h1>
            <div className={styles.addPanel}>
                <h3>Add an event</h3>
                <div className={styles.innerAddPanel}>
                    <label>Enter event to add into list: </label>
                    <input type="text" placeholder="Enter event" onChange={props.updateInputText} />
                    <button className={styles.btn} onClick={props.addItem}>Add to list</button>
                </div>
            </div>
        </div>
    );
}

export default ToDoActionBar;