import React, { useEffect, useState } from 'react'

const AutomaticCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [direction, setDirection] = useState('increase');
    

    useEffect(()=>{
        let timer;
        if(counter <= 1) setDirection('increase');
        if(counter>=9) setDirection('decrease');
        if(isRunning){
            timer = setTimeout(()=>{
                setCounter(prev=> direction === 'decrease' ? prev - 1 : prev + 1)
            }, 500)
        }
        return ()=>{clearTimeout(timer)};
    }, [isRunning, counter])

    const handleStart = () =>{
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={handleStart} > start </button>
        <button onClick={handleStop} > stop </button>

      </div>
    </div>
  )
}

export default AutomaticCounter
