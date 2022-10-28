export default function Footer() {
    return (
        <section className='relative'>
            <div className='absolute translate-x-2 translate-y-2 -z-10 h-20 w-full bg-green-400'>
            </div>
            <div className='absolute translate-x-4 translate-y-4 -z-20 h-20 w-full bg-green-300'>
            </div>
            <address id='footer' className='bg-green-900 h-20 w-full'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl text-white'>
                    <li className=''><a href='https://github.com/hajin-park' target='_blank'>Github</a></li>
                    <li className=''><a href='https://www.linkedin.com/in/hajinpark/' target='_blank'>LinkedIn</a></li>
                    <li className=''><a href='https://www.facebook.com/hajinprk' target='_blank'>Facebook</a></li>
                    <li className='' target='_blank'><a href='/'>Email</a></li>
                </ul>
            </address>
        </section>
    )
}