import ToDoItem from './ToDoItem'
import '../styles/ToDoItemsList.css'

import {Component} from "react";

export default class ToDoItemsList extends Component  {

    render(){
        let {value} = this.props;

    return (
                <ul className='list-group w-100' >
            {value.map((item, key) =>
                <li className='list-group-item' key ={key} ><
                    ToDoItem {...item}
                    onDeleteItem = {() => {this.props.delToDo(key)}}
                    toggleDone = {() => {this.props.onToggleDone(key)}}
                    toggleImportant = {() => {this.props.onToggleImportant(key)}}/></li>

            )}
        </ul>
    )
    }
}

