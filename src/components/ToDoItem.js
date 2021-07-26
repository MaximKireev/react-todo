import {Component} from "react";
import '../styles/ToDoItem.css'
import DeleteIcon from "@material-ui/icons/Delete";


export default class ToDoItem extends Component  {

render(){
    let {todo, done, important} = this.props;

    let className = 'todo-item'
    if(done) {
        className += ' done'
    }
  if(important) {
        className += ' important'
    }


        return (
            <div>
            <span className={className} onClick={() => this.props.toggleDone()}>{todo}</span>

            <div className='buttons-wrapper'>
            <button type="button"
                    className=" delete-item btn btn-outline-danger btn-sm"
                    onClick={this.props.onDeleteItem}>

            <DeleteIcon />
            </button>
            <button type="button"
                className=" make-important btn btn-outline-primary btn-sm"
                onClick={this.props.toggleImportant}>!</button>
        </div>
            </div>)
}

}
