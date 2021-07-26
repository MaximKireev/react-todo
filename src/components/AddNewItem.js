import '../styles/AddNewItem.css'
import {Component} from "react";


export default class AddNewItem extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'Add new item ToDo!'
        }
        this.onInputHandle = (event) => {
            this.setState({inputValue: event.target.value})
        }
        this.onFormSubmit = (event) => {
           
                this.props.onNewItemAdd(this.state.inputValue);
                event.preventDefault();
                this.setState({inputValue: ' '})
        }

    }


    render(){
        return(

        <form className="add-item-wrapper"
              onSubmit={this.onFormSubmit}>
        <input type="text"
               placeholder= 'Add new item!'
               className='search w-100'
               value={this.state.inputValue}
               onChange={this.onInputHandle} />
        <button className = 'add-item'
                type="submit">+</button>
        </form>
    )
    }
}

