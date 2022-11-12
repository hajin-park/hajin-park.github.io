export default function NavigationSection() {
    return (
        <nav className="relative w-full h-full">
            <ul className="grid grid-cols-[1fr_1fr_240px] grid-rows-[35%_65%] w-full h-full overflow-hidden">
                <li className="col-start-1 col-end-2 row-start-1 row-end-2 w-fit h-fit pt-14 pl-12">
                    <a href="/" className="font-black text-5xl text-[#202020]">PROJECTS</a>
                </li>
                <li className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-end pt-12 pr-20 w-fit h-fit">
                    <a href="/" className="font-black text-5xl text-[#202020]">SKILLS</a>
                </li>
                <li className="col-start-2 col-end-3 row-start-1 row-end-2 pl-20 w-fit h-fit">
                    <a href="/" className="leading-[0.6] font-black text-5xl text-[#202020]">ABOUT ME</a>
                </li>
                <li className="col-start-3 col-end-4 row-span-2 justify-self-end pt-[6.5rem] w-fit h-fit">
                    <a href="/" className="font-black text-5xl text-[#202020]">SOCIALS</a>
                </li>
                <li className="overflow-hidden col-start-1 col-end-3 row-start-1 row-end-2">
                    <div className="ml-12 w-full h-full border-b border-black"></div>
                </li>
                <li className="col-start-1 col-end-2 row-start-1 row-end-3">
                    <div className="w-full h-full border-r border-black"></div>
                </li>
                <li className="col-start-2 col-end-3 row-start-1 row-end-3">
                    <div className="w-4/5 h-2/3 border-r border-black"></div>
                </li>
            </ul>
        </nav>
    )
}