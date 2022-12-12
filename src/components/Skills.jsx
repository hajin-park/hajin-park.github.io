import SkillCard from './shared/SkillCard'

export default function Skills() {
    return (
        <article className="grid w-full h-screen justify-center content-center">
            <h2 className="fade opacity-0 leading-tight bg-gradient-to-r bg-clip-text text-transparent text-center font-black text-7xl from-sky-300 via-rose-300 to-amber-400 lg:text-9xl lg:from-rose-300 lg:via-rose-400 lg:to-amber-400 lg:leading-tight">
                Skills
            </h2>
            <section className="grid grid-cols-2 w-screen px-8 py-8 gap-8 lg:px-16 lg:py-16 lg:gap-16">
                <SkillCard name="Computer" items={["Python", "JavaScript", "Java", "C++", "HTML/CSS"]}/>
                <SkillCard name="Technologies" items={["React.js", "TailwindCSS", "Git/GitHub", "Firebase", "Figma"]}/>
            </section>
        </article>
    )
}