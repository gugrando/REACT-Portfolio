import Container from "../Container"
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import LinkButton from "../LinkButton";

import Tag1 from "/src/assets/tags1.png"
import Tag2 from "/src/assets/tags2.png"
import Tag3 from "/src/assets/tags3.png"

function Projects(){
    return (
        <Container bg={'bg-gradient-to-b from-neutral-400 to-neutral-900'}>
            <article id="project" className="flex flex-col w-full items-center h-1/2 p-8 lg:mt-16">
                <h1 className="text-neutral-50 text-center text-3xl font-bold lg:text-start">Projects</h1>
                <section className="w-screen flex flex-wrap justify-center gap-8 p-2 mt-4">
                    <article className="flex flex-col min-w-full items-center md:min-w-80 h-80 bg-neutral-900 rounded-md pt-2 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="flex flex-col w-full h-full items-center">
                            <h2 className="text-neutral-400 text-2xl font-bold">Frontend</h2>
                            <img className="w-48 mt-6 filter drop-shadow-2xl  transition-all duration-300 hover:transform hover:scale-105" src={Tag1} alt="" />
                        </div>
                        <LinkButton to={"/project"} classe="w-3/6 h-12 bg-neutral-700 rounded-md mb-4 text-blue-200 text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-500 hover:text-neutral-800" text={"See Projects"}></LinkButton>
                    </article>
                    <article className="flex flex-col min-w-full items-center md:min-w-80 h-80 bg-neutral-900 rounded-md pt-2 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="flex flex-col w-full h-full items-center">
                            <h2 className="text-neutral-400 text-2xl font-bold">All Projects</h2>
                            <img className="w-48 mt-6 filter drop-shadow-2xl  transition-all duration-300 hover:transform hover:scale-105" src={Tag2} alt="" />
                        </div>
                        <LinkButton to={"/project"} classe="w-3/6 h-12 bg-neutral-700 rounded-md mb-4 text-blue-200 text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-500 hover:text-neutral-800" text={"See Projects"}></LinkButton>
                    </article>
                    <article className="flex flex-col min-w-full items-center md:min-w-80 h-80 bg-neutral-900 rounded-md pt-2 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="flex flex-col w-full h-full items-center">
                            <h2 className="text-neutral-400 text-2xl font-bold">Backend</h2>
                            <img className="w-48 mt-6 filter drop-shadow-2xl  transition-all duration-300 hover:transform hover:scale-105" src={Tag3} alt="" />
                        </div>
                        <LinkButton to={"/project"} classe="w-3/6 h-12 bg-neutral-700 rounded-md mb-4 text-blue-200 text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-500 hover:text-neutral-800" text={"See Projects"}></LinkButton>
                    </article>
                </section>
                <p className="mt-4 text-neutral-400 text-md text-center">
                    You can see and follow my projects on Linkedin and Github
                </p>
                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/gugrando" target="_blank" rel="noreferrer"><FiGithub className="w-6 h-6 mt-2 text-white hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-110" /></a>
                    <a href="https://www.linkedin.com/in/gugrando/" target="_blank" rel="noreferrer"><PiLinkedinLogoBold className="w-6 h-6 mt-2 text-white hover:text-blue-500 cursor-pointer transition-all duration-300 hover:scale-110" /></a>
                </div>
            </article>
        </Container>
    )
}

export default Projects