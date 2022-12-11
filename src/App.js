import LandingSection from './components/LandingSection'

export default function App() {
    return (
        <div className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100 via-rose-200 to-sky-300">
            <div className="z-10 absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-75 brightness-100 contrast-100"></div>
            <LandingSection />
        </div>
    )
}
