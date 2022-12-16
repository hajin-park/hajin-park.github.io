export default function Backgrounds() {
    return (
        <>
            <div className="background-color absolute w-full h-screen overflow-hidden bottom-0 clip-path-poly-right bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-800  to-black "></div>
            <div className="absolute w-full h-screen overflow-hidden bottom-0 clip-path-poly-left bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black  to-amber-900 "></div>
            <div className="z-10 absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-60 brightness-100 contrast-100"></div>
        </>
    )
}