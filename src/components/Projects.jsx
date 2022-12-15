import ProjectCard from './shared/ProjectCard'

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "Ucentials.org",
            img: "ucentials_project.png"
        },
        {
            id: 2,
            name: "StockState.org",
            img: "stockstate_project.png"
        },
        {
            id: 3,
            name: "OpenCV Game Bot",
            img: "opencv_project.png"
        },
        {
            id: 4,
            name: "Instagram Tracker",
            img: "instagram_project.png"
        },
        {
            id: 5,
            name: "Pygame Game",
            img: "pygame_project.png"
        },
        {
            id: 6,
            name: "Discord Bot",
            img: "discord_project.png"
        },
    ]

    return (
        <article className="grid w-full justify-center content-center mb-32">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-400 to-rose-400 lg:text-9xl lg:from-sky-400 lg:to-rose-500 lg:leading-tight">
                Projects
            </h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 w-screen px-8 py-8 gap-8 lg:px-16 lg:py-16 lg:gap-16">
                {projects.map(project => <ProjectCard key={project.id} data={project} />)}
            </section>
        </article>
    )
}