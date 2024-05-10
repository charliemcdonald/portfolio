export default function Navbar() {
    return (
        <div id="navbar" className="lg:h-full lg:w-[100px] w-full shadow-lg py-2 text-black flex lg:flex-col justify-between fixed lg:right-0 top-0 z-40 bg-white/60 backdrop-blur-sm">
            <div id="logo" className="p-2 text-center">
                <h2 className="font-bold">CM</h2>
            </div>
            <nav className="">
                <ul className="flex lg:flex-col list-none *:p-2 font-bold">
                    <li>
                        <a href='/' className="hover:bg-black hover:rounded-full hover:text-white hover:shadow-lg transition-all p-2">home</a>
                    </li>
                    <li>
                        <a href='/about' className="hover:bg-black hover:rounded-full hover:text-white hover:shadow-lg transition-all p-2">about</a>
                    </li>
                    <li>
                        <a href='/blog' className="hover:bg-black hover:rounded-full hover:text-white hover:shadow-lg transition-all p-2">blog</a>
                    </li>
                    <li>
                        <a href='/portfolio' className="hover:bg-black hover:rounded-full hover:text-white hover:shadow-lg transition-all p-2">portfolio</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}