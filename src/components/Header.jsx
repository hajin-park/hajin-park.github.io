import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const changeOpacity = () => {
            const headerContainer = document.getElementById('header-container')
            headerContainer.classList.remove('opacity-0')
            headerContainer.classList.add('opacity-100')
        }

        changeOpacity()
    }, [])


    return (
        <header id='header-container' className='container opacity-0 w-fit mx-auto my-auto transition-opacity duration-2000'>
            <h1 className='text-7xl font-bold text-stone-900'>Hi, I'm Hajin Park.</h1>
            <p className='text-7xl font-bold text-stone-700'>Welcome to my portfolio!</p>
            <p className='text-7xl font-bold text-stone-500'>More coming soon...</p>
        </header>
    )
}