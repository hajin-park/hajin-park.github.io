export default function LandingSection() {
    const callback = (entries) => entries.forEach(
        entry => {
            entry.isIntersecting 
                ? entry.target.classList.add("animate-fadeIn")
                : entry.target.classList.remove("animate-fadeIn")
        })

    const targets = document.querySelectorAll(".leading-tight");
    const observer = new IntersectionObserver(callback);

    targets.forEach((target) => observer.observe(target))

    return (
        <article className="w-full h-full">
            <h2 className="opacity-0 bg-gradient-to-r from-sky-500 to-rose-300 text-transparent font-black text-9xl bg-clip-text text-center pt-48 pb-72 lg:pt-96 lg:pb-112 leading-tight">Hajin Park</h2>
            <h2 className="opacity-0 bg-gradient-to-r from-sky-400 to-rose-400 text-transparent font-black text-7xl lg:text-9xl bg-clip-text text-center pt-64 pb-72 lg:pt-96 lg:pb-112 leading-tight">Projects</h2>
            <h2 className="opacity-0 bg-gradient-to-r from-sky-400 via-rose-300 to-amber-100 text-transparent font-black text-8xl lg:text-9xl bg-clip-text text-center pt-64 pb-72 lg:pt-96 lg:pb-112 leading-tight">Skills</h2>
            <h2 className="opacity-0 bg-gradient-to-r from-sky-300 via-rose-300 to-amber-200 text-transparent font-black text-7xl lg:text-9xl bg-clip-text text-center pt-64 pb-72 lg:pt-96 lg:pb-112 leading-tight">Contacts</h2>
        </article>
    )
}