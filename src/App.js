import { useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Backgrounds from './components/Backgrounds'

export default function App() {
    const callback = (entries) => entries.forEach(
        entry => {
            entry.isIntersecting 
                ? entry.target.classList.add("animate-fadeIn")
                : entry.target.classList.remove("animate-fadeIn")
        })

    useEffect(() => {
        const targets = document.querySelectorAll(".fade");
        const observer = new IntersectionObserver(callback);
        targets.forEach((target) => observer.observe(target))
    }, [])

    return (
        <div className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100 via-rose-200 to-sky-300">
            <Backgrounds />
            <Header />
            <Projects />
            <Skills />
            <Contacts />
        </div>
    )
}
