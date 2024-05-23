/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Container from "../Container"
import perfil from "../../assets/perfil.png"


// eslint-disable-next-line no-unused-vars
function Home() {
    return (
        <Container>
            <article className="flex flex-col justify-center gap-6 w-full h-1/2 md:w-2/3 lg:h-80">
                <h1 className="text-neutral-800 text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold">Front-End React Developer</h1>
                <p className="text-neutral-500 text-lg text-center lg:text-start lg:max-w-lg">Hi! I'm Gustavo Grando, a Front-End MERN Developer, based in Rio Grande do Sul, Brazil.📍</p>
            </article>
            <article className="flex justify-center w-fit h-1/2 md:h-full mt-4 md:mt-16">
                <img src={perfil} alt="profile" className="morph w-2/3 md:w-96" />
            </article>
        </Container>
    )
}

export default Home