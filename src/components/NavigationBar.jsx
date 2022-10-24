export default function NavigationBar() {
    return (
        <nav className='flex pb-2 text-center items-end w-full h-16 bg-gray-800 fixed bg-opacity-50 hover:bg-opacity-80 top-0'>
            <p className='basis-1/2 text-2xl font-bold hover:font-black text-white'><a href="#skills">Skills</a></p>
            <p className='basis-1/2 text-2xl font-bold hover:font-black text-white'><a href="#projects">Projects</a></p>
            <p className='basis-1/2 text-2xl font-bold hover:font-black text-white'><a href="#certificates">Certificates</a></p>
            <p className='basis-1/2 text-2xl font-bold hover:font-black text-white'><a href="#about">Contacts</a></p>
        </nav>
    )
}