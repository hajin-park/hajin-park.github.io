export default function Footer() {
    return (
        <section className='group relative'>
            <div className='transition-all delay-100 absolute -translate-x-2 translate-y-2 group-hover:translate-y-3 group-hover:-translate-x-3 -z-10 h-20 w-full bg-green-400'>
            </div>
            <div className='transition-all absolute -translate-x-4 translate-y-4 group-hover:translate-y-5 group-hover:-translate-x-5 -z-20 h-20 w-full bg-green-300 shadow-lg'>
            </div>
            <address id='footer' className='transition-all group-active:-translate-x-1 group-active:translate-y-1 bg-green-900 h-20 w-full'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl text-white'>
                    <li className=''><a href='https://github.com/hajin-park' target='_blank' rel="noreferrer">Github</a></li>
                    <li className=''><a href='https://www.linkedin.com/in/hajinpark/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li className=''><a href='https://www.facebook.com/hajinprk' target='_blank' rel="noreferrer">Facebook</a></li>
                    <li className='' target='_blank'><a href='/'>Email</a></li>
                </ul>
            </address>
        </section>
    )
}