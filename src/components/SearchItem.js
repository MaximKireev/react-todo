import '../styles/SearchItem.css'
import {Component} from "react";

export default class SearchItem extends Component{
    constructor() {
        super();
        this.state = {
            searchValue: ''
        };
        this.setSearchValue = (e) => {
            this.setState({searchValue: e.target.value});
            this.props.onSearchItems(e.target.value)
        }


    }
    render(){
    return <input
        type="text"
        placeholder= 'search...'
        className='search w-50'
        onChange={this.setSearchValue}/>
    }
}
