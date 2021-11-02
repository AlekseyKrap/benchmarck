import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useLayoutEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {setRows, setColumns} from "./reduser";

const TEST_COUNT = 5;

function performanceStat(time) {
    const standard = 2800;
    return standard / time * 100
}


function getStats(coefficient) {
    if (coefficient >= 85) {
        return 'Мы рекомендуем для работы с ТД'
    }
    if (coefficient >= 70) {
        return 'Возможны лаги в отображении'
    }
    return 'Возможны сильные проседания в производительности'
}

const Performanse = ({start, end}) => {
    const time = end - start;
    const perfProc = performanceStat(time)
    const coefficient = perfProc > 100 ? 100 : perfProc;
    return (
        <>
            <p>Time: {time} ms</p>
            <p>Сoefficient: {coefficient.toFixed()} </p>
            <p>Статус: {getStats(coefficient)} </p>
        </>
    )

}

function App() {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [performanceStart] = useState(() => performance.now())
    const {rows, columns} = useSelector(
        ({tableReducer}) => tableReducer,
    );


    useEffect(() => {
        const rows = [...Array(1000).keys()];
        const columns = [...Array(100).keys()];
        dispatch(setRows(rows))
        dispatch(setColumns(columns))
    }, [])

    useLayoutEffect(() => {
        setTimeout(() => {
            if (count >= TEST_COUNT) return;
            setCount(v => ++v)
        }, 10)
    },[rows])

    useEffect(() => {
        if (count === TEST_COUNT) return;
        if (count > 1) {
            const rows = [...Array(1000).keys()];
            const rFilter = rows.filter(i => (i % (TEST_COUNT - count)) === 0 ? false : true);
            dispatch(setRows(rFilter))
        }
    }, [count])

    console.log({count})
    console.log({rows})
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {count === TEST_COUNT && <Performanse start={performanceStart} end={performance.now()}/>}
            </header>
            <section>
                <table>
                    <tbody>
                    {rows.map(row => (
                        <tr key={row}>
                            {columns.map(col => (<td key={col}>{col}</td>))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default App;
