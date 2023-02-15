import { ITask } from "../../types/task";
import Item from "./item";
import listStyle from './List.module.scss';

interface Props {

    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void 
}

function List( { tasks, selectTask }: Props) {

    return(

        <aside className={listStyle["to-do-list"]}>
            <h2>Studies of the day</h2>
            <ul>
                {tasks.map((task) => (
                    
                    <Item 
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;