import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../atoms/atom";
import './TodoListStats.scss'



export function TodoListStats() {
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatsState);
  
    const formattedPercentCompleted = Math.round(percentCompleted);
  
    return (
      <ul className="todo-list-stats">
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    );
  }