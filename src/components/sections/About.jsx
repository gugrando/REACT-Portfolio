/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Container from "../Container"
import Astro from "/src/assets/Astro.png"
import CV from "/src/assets/DevCV.pdf"
function About (props) {
    return (
        <Container bg={'bg-gradient-to-b from-neutral-200 to-neutral-400'}>
            <article  className="flex h-1/2 lg:mt-16">
                <img className="w-56 sm:w-58 md:w-72 filter drop-shadow-2xl" src={Astro} alt="" />
            </article>
            <article className="flex-col h-1/2 p-8 lg:ml-24 lg:mt-16 bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
                <h1 className="text-neutral-800 text-center text-3xl font-bold lg:text-start">About Me</h1>
                <p className="text-lg font-normal text-center lg:text-start sm:max-w-96 lg:max-w-lg mt-6">Hey, my name is Gustavo Grando, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users. <span className="text-white">👋🏻</span>
                    <br /><br />
                    My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript. SQL & MongoDB as Data Base.<span className="text-white">🌐</span>
                </p>
                <div className="flex justify-center lg:justify-start">
                    
                    <a href={CV} download={"DevCV.pdf"}>
                        <button className="w-fit h-12 mt-8 px-4 bg-neutral-700 rounded-md mb-4 text-blue-200 text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-500 hover:text-neutral-800">Dowload my CV</button>
                    </a>
                </div>
            </article>
        </Container>
    )
}

export default About