export default function ProjectCard({ data }) {
    const {id, name, img} = data

    return (
        <section>
            <p className="font-bold text-3xl lg:text-4xl text-center">{name}</p>
            <div className="w-full h-48 lg:h-96 bg-rose-100">
                {`${img} ${id}`} 
            </div>
        </section>
    )
}