import '../styles/AddNewItem.css'
import {Component} from "react";


export default class AddNewItem extends Component {
    render(){
        return(
        <div className="add-item-wrapper">
        <input type="text" placeholder= 'Add new item!' className='search w-100' />
        <button className = 'add-item'>+</button>
        </div>
    )
    }
}

