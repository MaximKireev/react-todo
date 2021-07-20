import ToDoItem from './ToDoItem'

const ToDoItemsList = ({value}) => {

    return (
        <ul>
            {value.map((item, key) =>
                <li key ={'key '+key} ><ToDoItem {...item} /></li>
            )}
        </ul>
    )
}

export default ToDoItemsList