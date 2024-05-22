import { useState } from "react"
import { HiMenu } from "react-icons/hi";

function Header() {
    const [show, setShow] = useState('hidden')
    const toggleShow = () => {setShow(show === 'hidden' ? 'flex' : 'hidden')}

    return (
        <header className="flex-col items-center w-full h-16 md:flex md:flex-row bg-white">
            <div className="flex justify-between items-center w-full h-full md:w-fit ">
                <h1 className="text-neutral-800 text-3xl font-extrabold ml-8">Header</h1>
                <HiMenu onClick={toggleShow} className="md:hidden text-3xl mr-8" />
            </div>
            <nav className="w-full mr-8">
                <ul className={`${show} flex-col w-full justify-end gap-6 text-neutral-800 font-bold md:flex md:flex-row`}>
                    <li><a className="hover:text-blue-500 ease-linear duration-150" href="">Home</a></li>
                    <li><a className="hover:text-blue-500 ease-linear duration-150" href="">About</a></li>
                    <li><a className="hover:text-blue-500 ease-linear duration-150" href="">Projects</a></li>
                    <li><a className="hover:text-blue-500 ease-linear duration-150" href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header