export default function Navbar() {
    return (
        <div id="navbar" className="w-full shadow-sm py-2 text-black flex justify-between fixed top-0 z-40 bg-white">
            <div id="logo" className="p-2 text-center">
                <h2 className="font-bold">charlie mcdonald</h2>
            </div>
            <nav className="">
                <ul className="flex flex-row list-none *:p-2 font-bold">
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