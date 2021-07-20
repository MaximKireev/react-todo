import React from 'react';
import ReactDOM from 'react-dom'
import AppHeader from './AppHeader'
import ToDoItemsList from './ToDoItemsList'
import AddNewItem from "./AddNewItem";

let App = () => {
    let itemsArray = [
        {todo: "Dreenk coffe", important: false},
        {todo: "Create React App", important: true}]

    return (
        <div>
            <AppHeader />
            <AddNewItem />
            <ToDoItemsList value = {itemsArray}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))