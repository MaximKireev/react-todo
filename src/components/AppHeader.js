import {Component} from "react";

export default class AppHeader extends Component{

render() {
    let {allToDos, itemsDone} = this.props;

    return (<div className='header'>
        <h1>My ToDo list</h1>
        <p>{allToDos} item(s) todo, {itemsDone} already done </p>
    </div>)
}


}
