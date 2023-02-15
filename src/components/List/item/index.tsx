import { ITask } from '../../../types/task';
import listStyle from './item.module.scss';

interface Props extends ITask {

    selectTask: (taskSelected: ITask) => void
}

export default function Item(
    {
        task, 
        timer, 
        selected, 
        completed, 
        id,
        selectTask,
    } : Props) {
        
    return (
        <li 
            className={`${listStyle.item} ${selected ? listStyle.selectedItem : ''} ${completed ? listStyle.completedItem : ''}`} 
            onClick={() => !completed && selectTask(
                {
                    task,
                    timer,
                    selected,
                    completed,
                    id
                }
                
            )
        }>
            
            <h3>{task}</h3>
            <span>{timer}</span>
            {completed && <span className={listStyle.complete} aria-label='completeTask'></span>}
        </li>
    )
}