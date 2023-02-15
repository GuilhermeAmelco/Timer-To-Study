import styleWatch from './Watch.module.scss';

interface Props {

    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

    return (

        <>
            <span className={styleWatch.watchNumber}>{minuteTen}</span>
            <span className={styleWatch.watchNumber}>{minuteUnit}</span>
            <span className={styleWatch.watchDivision}>:</span>
            <span className={styleWatch.watchNumber}>{secondTen}</span>
            <span className={styleWatch.watchNumber}>{secondUnit}</span>
        </>
    )
}