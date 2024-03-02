import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { start, stop, reset } from './timerSlice'

const Timer = () => {
    const count = useSelector((state) => state.timer.count)
    const running = useSelector((state) => state.timer.running)
    const dispatch = useDispatch()
    console.log(running)

    useEffect(() => {

        let myInterval;
        if (!running) {
            return
        }
        else {
            myInterval = setInterval(() => startInterval(), 1000)
        }
        return () => {
            clearInterval(myInterval)
        }

    }, [running])

    const startInterval = () => { dispatch(start()) }

    return (
        <section>
            <h3>Timer</h3>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(start())}>Start</button>
                <button onClick={() => dispatch(stop())}>Stop</button>
            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </section>
    )
}

export default Timer