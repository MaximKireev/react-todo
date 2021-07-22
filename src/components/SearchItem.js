import '../styles/SearchItem.css'
import {Component} from "react";

export default class SearchItem extends Component{
    render(){
    return <input type="text" placeholder= 'Search...' className='search w-50' />
    }
}
