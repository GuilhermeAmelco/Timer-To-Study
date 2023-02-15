import Btn from "../Btn";
import Watch from "./Watch";
import style from './stopWatch.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {

    selected: ITask | undefined
    finishItem: () => void
}

export default function StopWatch({ selected, finishItem  } : Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.timer) {
            setTime(timeToSeconds(selected.timer))
        }
    },[selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishItem();
        }, 1000)
    }

    return (
        <div className={style.stopWatch}>
            <p className={style.title}>Choose a card and start the stopWatch</p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>

            <Btn 
                type="button"
                text="start"
                onClick={() => regressive(time)}
            />
        </div>
    )
}