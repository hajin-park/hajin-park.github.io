import { useRef, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Backgrounds from './components/Backgrounds'

export default function App() {
    const gradients = useRef([0,100,200])

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

        background.classList.remove(`from-sky-${gradients.current[0]}`, `via-rose-${gradients.current[1]}`, `to-amber-${gradients.current[2]}`)

        gradients.current = gradients.current.map(gradient => gradient === 900 ? 0 : gradient + 100)

        background.classList.add(`from-sky-${gradients.current[0]}`, `via-rose-${gradients.current[1]}`, `to-amber-${gradients.current[2]}`)
        console.log(gradients.current)
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