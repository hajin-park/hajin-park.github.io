export default function Footer() {
    return (
        <section className='group relative -skew-x-[4deg]'>
            <div className='transition-all delay-100 absolute -translate-x-2 translate-y-2 group-hover:translate-y-4 group-hover:-translate-x-4 -z-10 h-20 w-full bg-green-400'>
            </div>
            <div className='transition-all absolute -translate-x-4 translate-y-4 group-hover:translate-y-6 group-hover:-translate-x-6 -z-20 h-20 w-full bg-green-200 shadow-lg'>
            </div>
            <address id='footer' className='transition-all group-hover:-translate-x-1 group-hover:translate-y-1 group-active:-translate-x-2 group-active:translate-y-2 bg-green-900 h-20 w-full'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl text-green-400 not-italic'>
                    <li className='hover:underline active:text-green-200'><a href='https://github.com/hajin-park' target='_blank' rel="noreferrer">Github</a></li>
                    <li className='hover:underline active:text-green-200'><a href='https://www.linkedin.com/in/hajinpark/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li className='hover:underline active:text-green-200'><a href='https://www.facebook.com/hajinprk' target='_blank' rel="noreferrer">Facebook</a></li>
                    <li className='hover:underline active:text-green-200' target='_blank'><a href='/'>Email</a></li>
                </ul>
            </address>
        </section>
    )
}