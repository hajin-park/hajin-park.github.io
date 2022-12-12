import ProjectCard from './shared/ProjectCard'

export default function Projects() {
    return (
        <article className="grid w-full justify-center content-center mb-32">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-400 to-rose-400 lg:text-9xl lg:from-sky-400 lg:to-rose-500 lg:leading-tight">
                Projects
            </h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 w-screen px-8 py-8 gap-8 lg:px-16 lg:py-16 lg:gap-16">
                <ProjectCard name="Marketplace Website"/>
                <ProjectCard name="Grocery Data Scraper"/>
                <ProjectCard name="OpenCV Game Bot"/>
                <ProjectCard name="Instagram Tracker"/>
                <ProjectCard name="Pygame Game"/>
                <ProjectCard name="Discord Bot"/>
            </section>
        </article>
    )
}