export default function SkillCard({ name, items }) {
    return (
        <section>
            <p className="font-extrabold text-2xl lg:text-4xl text-center">{name}</p>
            <div className="w-full h-48 lg:h-96 bg-rose-100 p-4 lg:p-8">
                <ul className="flex flex-col text-center font-semibold text-xl lg:text-3xl">
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </section>
    )
}