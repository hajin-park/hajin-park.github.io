import { useRef, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Backgrounds from './components/Backgrounds'

export default function App() {
    const gradients = useRef([0,0,0])

    const callback = (entries) => {
        entries.forEach(entry => {
            entry.isIntersecting 
                ? entry.target.classList.add("animate-fadeIn")
                : entry.target.classList.remove("animate-fadeIn")
            }
        )
        backgroundTransition()
    }

    const backgroundTransition = () => {
        const background = document.querySelector(".background")
        for (const c of background.classList) {
            if (["from", "via", "to"].includes(c.split("-")[0])) {
                console.log(background.classList)
                background.classList.remove(c)
                background.classList.add(`${c.split("-")[0]}-[#${"FFFFFF"}]`)
            }
        }
    }

    useEffect(() => {
        const targets = document.querySelectorAll(".fade");
        const observer = new IntersectionObserver(callback);
        targets.forEach((target) => observer.observe(target))
    }, [])

    return (
        <div className="background relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-0 via-rose-100 to-amber-200">
            <Backgrounds />
            <Header />
            <Projects />
            <Skills />
            <Contacts />
        </div>
    )
}