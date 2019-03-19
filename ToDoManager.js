import React, { Component } from 'react';
import styles from './App.module.css';
import ToDoActionBar from './ToDoActionBar'
import ToDoList from './ToDoList'

class ToDoManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      toDoItems: {}
    };
    this.insertNewToDo = this.insertNewToDo.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateToDoStatus = this.updateToDoStatus.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteSelectedItem = this.deleteSelectedItem.bind(this);
    this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
    this.setSelectedStatus = this.setSelectedStatus.bind(this);
  }

  updateInputText(event) {
    this.setState({ todoText: event.target.value });
  }

  insertNewToDo() {
    let newToDo = {
      toDoId: new Date().getTime(),
      toDoText: this.state.todoText,
      toDoCompletedStatus: false,
      toDoChecked: false,
      toDoUpdateStatus: false
    };

    let toDoItems = { ...this.state.toDoItems };
    toDoItems[newToDo.toDoId] = newToDo;
    this.setState({ toDoItems });
  }

  setSelectedStatus(todoID) {
    let toDoItems = Object.assign({}, this.state.toDoItems);
    toDoItems[todoID] = JSON.parse(JSON.stringify(toDoItems[todoID]));
    toDoItems[todoID].toDoChecked = !toDoItems[todoID].toDoChecked;
    this.setState({ toDoItems });
  }

  markCompleted(todoID) {
    let toDoItems = Object.assign({}, this.state.toDoItems);
    toDoItems[todoID] = JSON.parse(JSON.stringify(toDoItems[todoID]));

    toDoItems[todoID].toDoCompletedStatus = !toDoItems[todoID].toDoCompletedStatus;
    this.setState({ toDoItems });
  }

  deleteItem(todoID) {
    let toDoItems = Object.assign({}, this.state.toDoItems);
    toDoItems[todoID] = JSON.parse(JSON.stringify(toDoItems[todoID]));

    delete toDoItems[todoID];
    this.setState({ toDoItems });
  }

  updateToDoStatus(todoID) {
    let toDoItems = Object.assign({}, this.state.toDoItems);
    toDoItems[todoID] = JSON.parse(JSON.stringify(toDoItems[todoID]));

    toDoItems[todoID].toDoUpdateStatus = !toDoItems[todoID].toDoUpdateStatus;
    this.setState({ toDoItems })
  }

  updateItem(event, todoID) {
    let toDoItems = Object.assign({}, this.state.toDoItems);
    toDoItems[todoID] = JSON.parse(JSON.stringify(toDoItems[todoID]));

    toDoItems[todoID].toDoText = event.target.value;
    this.setState({ toDoItems });
  }

  deleteCompletedItem() {
    let toDoItems = Object.assign({}, this.state.toDoItems);

    Object.keys(toDoItems).forEach(toDoId => {
      if (toDoItems[toDoId].toDoCompletedStatus) {
        toDoItems[toDoId] = JSON.parse(JSON.stringify(toDoItems[toDoId]));
        delete toDoItems[toDoId];
      }
    });
    this.setState({ toDoItems });
  }

  deleteSelectedItem() {
    let toDoItems = Object.assign({}, this.state.toDoItems);

    Object.keys(toDoItems).forEach(toDoId => {
      if (toDoItems[toDoId].toDoChecked) {
        toDoItems[toDoId] = JSON.parse(JSON.stringify(toDoItems[toDoId]));
        delete toDoItems[toDoId];
      }
    });
    this.setState({ toDoItems });
  }

  render() {
    console.log("todomanager render");
    return (
      <div className={styles.app}>
        <ToDoActionBar
          addItem={this.insertNewToDo}
          updateInputText={this.updateInputText}
        />
        <br />
        <ToDoList
          todoDetails={this.state.toDoItems}
          markCompleted={this.markCompleted}
          deleteItem={this.deleteItem}
          updateToDoStatus={this.updateToDoStatus}
          updateItem={this.updateItem}
          setSelectedStatus={this.setSelectedStatus}
        />
        <div className={styles.deleteWrapper}>
          <button className={styles.deleteBtn} onClick={this.deleteSelectedItem}>Delete selected events</button>
          <button className={styles.deleteBtn} onClick={this.deleteCompletedItem}>Delete completed events</button>
        </div>
      </div>
    );
  }
}

export default ToDoManager;

//this is a file that renders a component


 //let toDoItems = Object.assign({}, this.state.toDoItems);

 //state = {
  //   personStatus: true,
  //   persons: [
  //     {name: "ABC", age: "11"},
  //     {name: "XYZ" , age: "89"}
  //   ]
  // };

  // togglePerson=() => {
  //   //mutating state without having the reference of state
  //   let currentStatus = this.state.personStatus;
  //   this.setState({
  //     personStatus: !currentStatus
  //   });

  //     //mutating state using  the reference of state in a callback func
  //   // this.setState(state =>{
  //   //   return {personStatus : !state.personStatus}
  //   // });
  // }

  // changeName = (event) => {
  //   console.log(event);
  //   this.setState({
  //     persons: [
  //       {name:"j", age:"11"},
  //       {name:event.target.value, age:"89"}
  //     ]
  //   });

  // }

  // render() {
  //   let person = null;
  //   let insertInPerson = <h1>inserted thru this</h1>;
  //   if(this.state.personStatus){
  //     person = (
  //       <div className="App">
  //       {this.state.persons.map((per, index) => {
  //         return <Person  key = {index} name = {per.name} age = {per.age}  changeValue = {this.changeName.bind(this, index)} content = {insertInPerson}/>
  //       })}
  //       </div>
  //     );
  //   }
  //   return (
  //     <MyContext.Provider value="blue">
  //       <Suspense fallback={<div>Loading...</div>}>{person}</Suspense>
  //       <button onClick = {this.togglePerson}>toggle view</button>
  //     </MyContext.Provider>

  //   );
  // }


  //////////////array implementation of to do in react
  //1)select todo
      // let toDoItems = [...this.state.toDoItems];
    // let modifiedToDo = toDoItems.filter(item => {
    //   if (todoID === item.toDoId) {
    //     item.toDoChecked = !item.toDoCohecked;
    //   }
    //   return item;
    // });
    // this.setState({ toDoItems: modifiedToDo });

    //2)markCompleted
      // let toDoItems = [...this.state.toDoItems];
    // let modifiedToDo = toDoItems.filter(item => {
    //   if (todoID === item.toDoId) {
    //     item.toDoCompletedStatus = !item.toDoCompletedStatus;
    //   }
    //   return item;
    // });

    //3)updatestatus
     // let toDoItems = [...this.state.toDoItems];
    // let modifiedToDo = toDoItems.filter(item => {
    //   if (todoID === item.toDoId) {
    //     item.toDoUpdateStatus = !item.toDoUpdateStatus;
    //   }
    //   return item;
    // });

    //4)update item
      // let toDoItems = [...this.state.toDoItems];
    // let modifiedToDo = toDoItems.filter(item => {
    //   if (todoID === item.toDoId) {
    //     item.toDoText = event.target.value;
    //   }
    //   return item;
    // });