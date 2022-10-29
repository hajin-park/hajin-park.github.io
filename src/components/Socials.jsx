export default function Socials() {
    return (
        <section className='group relative'>
            <div className='transition-all delay-100 absolute -translate-x-2 translate-y-2 group-hover:translate-y-4 group-hover:-translate-x-4 -z-10 h-20 w-full bg-pink-400 dark:bg-pink-700'>
            </div>
            <div className='transition-all absolute -translate-x-4 translate-y-4 group-hover:translate-y-6 group-hover:-translate-x-6 -z-20 h-20 w-full bg-pink-200 dark:bg-pink-900 shadow-lg shadow-pink-700/40 dark:shadow-pink-900/60'>
            </div>
            <address id='socials' className='transition-all group-hover:-translate-x-1 group-hover:translate-y-1 group-active:-translate-x-2 group-active:translate-y-2 bg-pink-900 dark:bg-pink-200 h-20 w-full'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl text-pink-400 dark:text-pink-700 not-italic'>
                    <li className='hover:underline active:text-pink-200 dark:active:text-pink-900'><a href='https://github.com/hajin-park' target='_blank' rel="noreferrer">Github</a></li>
                    <li className='hover:underline active:text-pink-200 dark:active:text-pink-900'><a href='https://www.linkedin.com/in/hajinpark/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li className='hover:underline active:text-pink-200 dark:active:text-pink-900'><a href='https://www.facebook.com/hajinprk' target='_blank' rel="noreferrer">Facebook</a></li>
                    <li className='hover:underline active:text-pink-200 dark:active:text-pink-900' target='_blank'><a href='/'>Email</a></li>
                </ul>
            </address>
        </section>
    )
}