export default function Header() {
    return (
        <article className="grid w-full h-screen justify-center content-center">
            <h2 className="fade opacity-0 bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-500 to-rose-400 lg:text-9xl lg:from-sky-400 lg:to-rose-300 leading-tight lg:leading-tight">
                Hajin Park
            </h2>
            <section className="grid grid-cols-2 lg:pl-20">
                <h3 className="fade opacity-0 border-r-2 text-right bg-gradient-to-r bg-clip-text text-transparent font-black text-3xl from-sky-500 to-rose-400 lg:text-6xl lg:from-sky-400 lg:via-sky-400 lg:to-rose-300">
                    <p>Computer Vision</p>
                    <p>Web Dev</p>
                </h3>
                <h3 className="fade opacity-0 text-left bg-gradient-to-r bg-clip-text text-transparent font-black text-4xl from-rose-400 to-rose-500 lg:text-6xl lg:from-rose-300 lg:to-rose-400">
                    <p>Music</p>
                    <p>Art</p>
                </h3>
            </section>
        </article>
    )
}