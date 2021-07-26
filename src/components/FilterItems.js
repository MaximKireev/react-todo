import '../styles/FilterItems.css'
import {Component} from "react";


export default class FilterItems extends Component{
    constructor() {

        super();
        this.state = {
            activeFilter: 'All'
        }
        this.setFilterToActive = (event) =>{
        let btns = document.querySelectorAll('.btn-group .btn-outline-secondary');
            for (let b of btns){
                let arr = Array.from(new Set(b.className.split(" ")));
                b.className = arr.filter(el => el !== 'active').join(' ');
            }
            event.target.className += ' active'
            this.setState({activeFilter:event.target.id });
            this.props.onActiveFilter(event.target.id)
        }
    }


    render(){
    return (
        <div className="btn-group"
             role="group"
             aria-label="Basic example"
                onClick={this.setFilterToActive}>
            <button type="button" className="btn btn-outline-secondary btn-sm active" id='All' >All</button>
            <button type="button" className="btn btn-outline-secondary btn-sm" id='Done'>Done</button>
            <button type="button" className="btn btn-outline-secondary btn-sm" id = 'ToDo'>To Do</button>
        </div>
    )
    }
}
