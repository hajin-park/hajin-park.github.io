export default function NavBar() {
    return (
        <section className='relative'>
            <div className='absolute translate-x-2 translate-y-2 -z-10 h-20 w-full bg-green-800'>
            </div>
            <div className='absolute translate-x-4 translate-y-4 -z-20 h-20 w-full bg-green-900'>
            </div>
            <nav className='bg-green-300 h-20 w-full'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl'>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/'>Skills</a></li>
                    <li><a href='/'>Certificates</a></li>
                </ul>
            </nav>
        </section>
    )
}