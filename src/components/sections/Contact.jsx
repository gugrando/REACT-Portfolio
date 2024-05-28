import Container from "../Container"
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Contact() {
    return (
        <Container bg={'bg-gradient-to-b from-neutral-900 to-black'}>
                <article className="flex flex-col items-center lg:items-start h-1/2 lg:w-1/2 lg:h-96">
                    <h1 className="text-center text-neutral-50 text-3xl font-bold mt-16">Contact Me!🤠</h1>
                    <ul className=" h-full flex lg:flex-col gap-6 mt-10 flex-wrap">
                        <li className="flex items-center gap-4"><HiOutlineMail className="w-8 h-8 text-neutral-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-110 transition-all" /><p className="hidden lg:inline hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-105 transition-all"><a href="mailto:gustavo.grando0909@gmail.com" className="text-neutral-500 hover:text-blue-500 transition-all">gustavo.grando0909@gmail.com</a></p></li>
                        <li className="flex items-center gap-4"><FiGithub className="w-8 h-8 text-neutral-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-110 transition-all" /><p className="hidden lg:inline hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-105 transition-all"><a href="https://www.linkedin.com/in/gugrando/" className="text-neutral-500 hover:text-blue-500 transition-all">linkedin.com/in/gugrando</a></p></li>
                        <li className="flex items-center gap-4"><PiLinkedinLogoBold className="w-8 h-8 text-neutral-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-110 transition-all" /><p className="hidden lg:inline hover:transition-all hover:duration-300 hover:cursor-pointer hover:transform hover:scale-105 transition-all"><a href="https://github.com/gugrando " className="text-neutral-500 hover:text-blue-500 transition-all">github.com/gugrando</a></p></li>
                    </ul>
                </article>
                <article className="flex h-1/2 lg:w-1/2 lg:mt-16 ">
                    <img className="w-72 md:w-80 lg:w-full" src="src/assets/marsLand.png" alt="" />
                </article>
        </Container>
    )
}

export default Contact