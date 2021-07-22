import AppHeader from './AppHeader'
import ToDoItemsList from './ToDoItemsList'
import SearchItem from "./SearchItem";
import AddNewItem from "./AddNewItem"
import FilterItems from './FilterItems'
import {Component} from "react";
import '../styles/mainCSS.css'


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemsArray: [
                {todo: "Dreenk coffe", important: false, done: false},
                {todo: "Create React App", important: false, done: false},
                {todo: "Task #3", important: false, done: false}
            ]}
            this.delToDoItem = (id) => {
                this.setState(({itemsArray}) => {
                    let newArr =  [...itemsArray.slice(0, id), ...itemsArray.slice(id+1)];
                    return {
                        itemsArray: newArr
                    }
                })

            }
            this.onToggleDone = (id) => {
            this.setState(({itemsArray}) => {
                return itemsArray.done = !itemsArray.done
            })
            }
            this.onToggleImportant = (id) => {
            console.log('ToggleImportant',id)
            }
    }

    render(){

        return (
            <div className= 'wrapper mx-auto w-25'>
                <AppHeader />
                <div className = 'search-filter-wrapper'>
                    <SearchItem /><FilterItems />
                </div>
                <ToDoItemsList
                    value = {this.state.itemsArray}
                    delToDo = {(id) => this.delToDoItem(id)}
                    onToggleDone = {(id) => this.onToggleDone(id)}
                    onToggleImportant = {(id) => this.onToggleImportant(id)}
                    />
                <AddNewItem />
            </div>
        )
    }
}