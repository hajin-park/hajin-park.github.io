import ProjectCard from './shared/ProjectCard'

export default function Projects() {
    return (
        <article className="grid w-full justify-center content-center">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-400 to-rose-400 lg:text-9xl lg:from-sky-300 lg:to-rose-400 lg:leading-tight">
                Projects
            </h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 w-screen px-8 py-8 gap-8 lg:px-16 lg:py-16 lg:gap-16">
                <ProjectCard name="..."/>
                <ProjectCard name="..."/>
                <ProjectCard name="..."/>
                <ProjectCard name="..."/>
            </section>
        </article>
    )
}