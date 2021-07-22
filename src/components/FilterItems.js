import '../styles/FilterItems.css'


const FilterItems = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary btn-sm">All</button>
            <button type="button" className="btn btn-outline-success btn-sm">Done</button>
            <button type="button" className="btn btn-outline-warning btn-sm">To Do</button>
        </div>
    )
}
export default FilterItems