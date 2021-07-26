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
                {todo: "Task #3", important: false, done: false}],
            termString: '',
            activeFilter: 'All'
        }

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
                let idx = itemsArray.findIndex((el, i) => i === id )
                let {done} = itemsArray[idx]
                let item =   {...itemsArray[idx], done: !done}
                let newArr = [...itemsArray.slice(0, idx), item ,...itemsArray.slice(idx+1)];

                return {
                    itemsArray: newArr
                }
            })
            }
            this.onToggleImportant = (id) => {
                this.setState(({itemsArray}) => {
                    let idx = itemsArray.findIndex((el, i) => i === id )
                    let {important} = itemsArray[idx]
                    let item =   {...itemsArray[idx], important: !important}
                    let newArr = [...itemsArray.slice(0, idx), item ,...itemsArray.slice(idx+1)];

                    return {
                        itemsArray: newArr
                    }
                })
            }
            this.onNewItemAdd = (val) => {

            this.setState(({itemsArray}) => {
                let newItem = {
                    todo: val,
                    important: false,
                    done: false};

                return {
                    itemsArray: [...itemsArray,newItem]}

    })
            }
            this.search = (items, str, activeFilter) => {

            function liveSearch( str) {
                if(str.length === 0) {
                    return items
                }
                return items.filter(el => el.todo.toLowerCase().includes(str.toLowerCase()) ? el : false)

            };
            function filters(activeFilter) {
                switch (activeFilter) {
                    case 'All':
                        return items;

                    case 'Done':
                        return items.filter(el => el.done === true);

                    case 'ToDo':
                        return items.filter(el => el.done === false);

                    default:
                        return items;
                };



            }

            return items.filter(el => filters(activeFilter)).
                         filter(el => liveSearch(str))

            }
            this.onSearchItems = (val) => {
            this.setState({termString: val})}

            this.onActiveFilter = (data) => {
            this.setState({activeFilter: data})
            }



    }

    render(){
        let {itemsArray, termString, activeFilter} = this.state
        let allToDos = itemsArray.filter(el => el.done === false).length;
        let itemsDone = itemsArray.filter(el => el.done === true).length;
        let visibleItems = this.search(itemsArray, termString, activeFilter)

        return (
            <div className= 'wrapper mx-auto w-25'>
                <AppHeader
                    allToDos={allToDos}
                    itemsDone ={itemsDone} />
                <div className = 'search-filter-wrapper'>
                    <SearchItem
                    onSearchItems = {(val) => this.onSearchItems(val)}/><FilterItems onActiveFilter = {(data) => this.onActiveFilter(data)}/>
                </div>
                <ToDoItemsList
                    value = {visibleItems}
                    delToDo = {(id) => this.delToDoItem(id)}
                    onToggleDone = {(id) => this.onToggleDone(id)}
                    onToggleImportant = {(id) => this.onToggleImportant(id)}
                    />
                <AddNewItem
                onNewItemAdd = {(val) => this.onNewItemAdd(val)}/>
            </div>
        )
    }
}