import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => prev +=1)
    }


    return (
        <section className='flex flex-col flex-auto items-center'>
            <h2 className='bg-amber-400 w-32 text-center'>{count}</h2>
            <button className='bg-yellow-200 w-32' onClick={handleClick}>Increase</button>
        </section>
    )
}