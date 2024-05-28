import { useState } from "react"
import { HiMenu } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";


function Header() {
    const [show, setShow] = useState('hidden')
    const toggleShow = () => {setShow(show === 'hidden' ? 'flex' : 'hidden')}

    return (
        <header className="flex-col items-center w-full h-16 md:flex md:flex-row bg-white shadow-lg shadow-neutral-200">
            <div className="flex justify-between items-center w-full h-full md:w-fit ">
                <h1 className="text-neutral-800 text-xl sm:text-3xl font-extrabold ml-8">Gustavo.dev</h1>
                {show === 'hidden' ? <HiMenu onClick={toggleShow} className="md:hidden text-3xl mr-8" /> : <HiMinus onClick={toggleShow} className="md:hidden text-3xl mr-8" />}
                
            </div>
            <nav className="w-full mr-8 transition-all duration-1000 ease-out z-10 absolute md:relative">
                <ul className={`${show} text-center flex-col w-full justify-end text-neutral-800 font-bold md:flex md:flex-row md:gap-8`}>
                    <li className="flex items-center bg-slate-200 p-4 border-b-2 border-slate-200 md:bg-white md:bg-none md:p-0 md:border-none"><a className="hover:text-blue-500 ease-linear duration-150" href="">Home</a></li>
                    <li className="flex items-center bg-slate-300 p-4 border-b-2 border-slate-200 md:bg-white md:bg-none md:p-0 md:border-none"><a className="hover:text-blue-500 ease-linear duration-150" href="">About</a></li>
                    <li className="flex items-center bg-slate-200 p-4 border-b-2 border-slate-200 md:bg-white md:bg-none md:p-0 md:border-none"><a className="hover:text-blue-500 ease-linear duration-150" href="">Projects</a></li>
                    <li className="flex items-center bg-slate-300 p-4 border-b-2 border-slate-200 md:bg-white md:p-0 md:border-none"><a className="hover:text-blue-500 ease-linear duration-150" href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header

