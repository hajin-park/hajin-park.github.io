export default function Contacts() {
    return (
        <article className="grid w-full h-screen justify-center content-center">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-300 via-rose-400 to-amber-400 lg:text-9xl lg:from-rose-400 lg:to-amber-400 lg:leading-tight">
                Contacts
            </h2>
            <ul className="flex justify-around text-2xl lg:text-4xl mt-24">
                <li className=""><a href="https://www.linkedin.com/in/hajinpark/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className=""><a href="https://github.com/hajin-park" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li className="">Gmail</li>
            </ul>
        </article>
    )
}