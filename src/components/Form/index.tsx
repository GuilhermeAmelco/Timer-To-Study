import React, { useState } from "react";
import { ITask } from "../../types/task";
import Btn from "../Btn";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {

    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {

    const[task, setTask] = useState("");
    const[timer, setTimer ] = useState("00:00")

    function addTask(e: React.FormEvent) {

        e.preventDefault()
        setTasks(oldTask => 
            [
                ...oldTask, 
                {
                    task,
                    timer,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTimer("00:00");
    }

    return(

        <form className={style["new-task"]} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Add a new study</label>
                    <input 
                        type="text" 
                        id="task"
                        name="task"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="what you want to learn?"
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="timer">Timer</label>
                    <input 
                        type="time"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        id="timer"
                        name="timer"
                        value={timer}
                        onChange={e => setTimer(e.target.value)}
                    />
                </div>
                <Btn 
                    text="Add"
                    type="submit"
                />
            </form>
    )
}
export default Form;