import NavigationSection from './NavigationSection'
import NameSection from './NameSection'

export default function LandingSection() {
    return (
        <article className="grid grid-cols-1 grid-rows-[40%_60%] w-screen h-screen bg-[#FFECBB]">
            <NavigationSection />
            <NameSection />
        </article>
    )
}