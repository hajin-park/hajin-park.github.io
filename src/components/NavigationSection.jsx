export default function NavigationSection() {
    return (
        <nav className="relative w-full h-full">
            <ul className="grid grid-cols-[4fr_3fr_2fr] grid-rows-[35%_65%] w-full h-full overflow-hidden">

                {/* Horizontal and vertical lines */}
                <li className="overflow-hidden col-start-1 col-end-3 row-start-1 row-end-2">
                    <div className="ml-12 w-full h-full border-b border-black"></div>
                </li>
                <li className="col-start-3 col-end-4 row-start-1 row-end-2">
                    <div className="w-2/5 h-full border-b border-black"></div>
                </li>
                <li className="col-start-1 col-end-2 row-start-1 row-end-3">
                    <div className="w-full h-full border-r border-black"></div>
                </li>
                <li className="col-start-2 col-end-3 row-start-1 row-end-3">
                    <div className="w-full h-2/3 border-r border-black"></div>
                </li>

                {/* Hover effect blocks and navigation links*/}
                <li className="overflow-hidden relative col-start-1 col-end-2 row-start-1 row-end-2">
                    <a href="/" className="peer z-10 transition-all absolute top-16 left-12 font-black text-5xl text-[#303030] hover:text-black">PROJECTS</a>
                    <div className="transition-all duration-700 bg-[#101010] opacity-30 translate-x-full peer-hover:translate-x-0 w-full h-full ml-12"></div>
                </li>
                <li className="overflow-hidden relative col-start-2 col-end-3 row-start-1 row-end-2">
                    <a href="/" className="peer z-10 transition-all absolute -top-2 font-black text-5xl text-[#303030] hover:text-black">ABOUT ME</a>
                    <div className="transition-all duration-700 bg-[#101010] opacity-30 -translate-x-full peer-hover:translate-x-0 w-full h-full"></div>
                </li>
                <li className="overflow-hidden relative col-start-1 col-end-2 row-start-2 row-end-3">
                    <a href="/" className="peer z-10 transition-all absolute top-24 right-16 font-black text-5xl text-[#303030] hover:text-black">SKILLS</a>
                    <div className="transition-all duration-700 bg-[#101010] opacity-30 translate-x-full peer-hover:translate-x-0 w-full h-full ml-12"></div>
                </li>
                <li className="overflow-hidden relative col-start-2 col-end-3 row-start-2 row-end-3">
                    <a href="/" className="peer z-10 transition-all absolute top-9 left-48 font-black text-5xl text-[#303030] hover:text-black">EXPERIENCE</a>
                    <div className="transition-all duration-700 bg-[#101010] opacity-30 -translate-x-full peer-hover:translate-x-0 w-full h-1/2"></div>
                </li>
            </ul>
        </nav>
    )
}