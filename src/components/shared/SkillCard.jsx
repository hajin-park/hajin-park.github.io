export default function SkillCard({ name }) {
    return (
        <section>
            <p className="font-medium text-2xl">{name}</p>
            <div className="w-full h-48 lg:h-96 bg-rose-100 rounded-xl">
                <img src="" alt="" />
            </div>
        </section>
    )
}