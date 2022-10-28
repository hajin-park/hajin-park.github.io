export default function NavBar() {
    return (
        <section className='relative group'>
            <div className='transition-all delay-100 absolute translate-x-2 translate-y-2 group-hover:translate-y-4 group-hover:translate-x-4 -z-10 h-20 w-full bg-green-800'>
            </div>
            <div className='transition-all absolute translate-x-4 translate-y-4 group-hover:translate-y-6 group-hover:translate-x-6 -z-20 h-20 w-full bg-green-900 shadow-lg'>
            </div>
            <nav className='transition-all bg-green-300 h-20 w-full group-active:translate-x-1 group-active:translate-y-1'>
                <ul className='h-full w-full flex items-center justify-around font-extrabold text-2xl'>
                    <li><a href='/'>About Me</a></li>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/'>Skills</a></li>
                    <li><a href='/'>Certificates</a></li>
                    <li><a href='#footer'>Contacts</a></li>
                </ul>
            </nav>
        </section>
    )
}