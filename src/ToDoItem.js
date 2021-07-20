const ToDoItem = ({todo, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }
    return <span style = {style} >{todo}</span>


}

export default ToDoItem