export default function Contacts() {
    return (
        <article className="grid w-full h-screen justify-center content-center">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-amber-600 to-stone-500 lg:text-9xl lg:from-amber-700 lg:to-stone-700 lg:leading-tight">
                Contacts
            </h2>
            <ul className="z-10 w-screen flex flex-wrap justify-around text-2xl lg:text-4xl mt-24">
                <li className=""><a href="https://www.linkedin.com/in/hajinpark/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className=""><a href="https://github.com/hajin-park" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li className="">hajin1819@gmail.com</li>
            </ul>
        </article>
    )
}