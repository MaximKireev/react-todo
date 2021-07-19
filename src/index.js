import React from 'react';
import ReactDOM from 'react-dom'

let App = () => {
    return (
        <div>
            <Header />
            <Search />
            <SearchItems />
        </div>
    )
}
const Header = () => {
    return <h1>My ToDo list</h1>
}
const Search = () => {
    return <input placeholder= 'Lets add new task!'/>
}
const SearchItems = () => {
    let itemsArray = ["Dreenk coffe", 'Create App']
    return (
        <ul>
            <li>{itemsArray[0]}</li>
            <li>{itemsArray[1]}</li>
        </ul>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))