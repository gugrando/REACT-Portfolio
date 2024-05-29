/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Container from "../Container"
import World from "/src/assets/WorldRS.png"
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

// eslint-disable-next-line no-unused-vars
function Home() {
    return (
        <Container bg={'bg-gradient-to-b from-white to-neutral-200'}>
            <article className="flex flex-col justify-center gap-8 w-full h-1/2 lg:mt-16 md:w-2/3 lg:h-80">
                <h1 className="text-neutral-800 text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold">Front-End React Developer</h1>
                <p className="text-neutral-500 text-lg text-center lg:text-start lg:max-w-lg">Hi! I'm Gustavo Grando, a Front-End 'MERN' Developer, based in Rio Grande do Sul, Brazil.📍</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                    <a href="https://github.com/gugrando" target="_blank" rel="noreferrer"><FiGithub className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-110"/></a>
                    <a href="https://www.linkedin.com/in/gugrando/" target="_blank" rel="noreferrer"><PiLinkedinLogoBold className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-110" /></a>
                    <a href="https://instagram.com/oguvieira_/" target="_blank" rel="noreferrer"><FiInstagram className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-110" /></a>
                </div>
            </article>
            <article className="flex justify-center w-fit h-1/2 md:h-full mt-4 md:mt-16">
                <img src={World} alt="profile" className="w-2/3 md:w-96 morph filter drop-shadow-2xl" />
            </article>
        </Container>
    )
}

export default Home