export default function NavBar() {
    return (
        <section className='relative group'>
            <div className='transition-all delay-100 absolute translate-x-2 translate-y-2 group-hover:translate-y-4 group-hover:translate-x-4 -z-10 h-20 w-full bg-green-400 dark:bg-green-700'>
            </div>
            <div className='transition-all absolute translate-x-4 translate-y-4 group-hover:translate-y-6 group-hover:translate-x-6 -z-20 h-20 w-full bg-green-200 dark:bg-green-900 shadow-lg shadow-green-700/40 dark:shadow-green-900/60'>
            </div>
            <nav className='transition-all bg-green-900 dark:bg-green-200 h-20 w-full group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-2 group-active:translate-y-2'>   
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl text-green-400 dark:text-green-700'>
                    <li className='hover:underline active:text-green-200 dark:active:text-green-900'><a href='#about-me'>About Me</a></li>
                    <li className='hover:underline active:text-green-200  dark:active:text-green-900'><a href='#socials'>Projects</a></li>
                    <li className='hover:underline active:text-green-200  dark:active:text-green-900'><a href='#socials'>Skills</a></li>
                    <li className='hover:underline active:text-green-200  dark:active:text-green-900'><a href='#socials'>Certificates</a></li>
                    <li className='hover:underline active:text-green-200  dark:active:text-green-900'><a href='#socials'>Socials</a></li>
                </ul>
            </nav>
        </section>
    )
}