import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../atoms/atom";
import './TodoListFilters.scss';

export function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };

    return (
        <div className="todo-list-filter">
            <h3>Filter:</h3>
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}
