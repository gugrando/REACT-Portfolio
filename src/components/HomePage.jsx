import Home from './sections/Home'
import Techs from './sections/Techs'
import About from './sections/About'
import DarkButton from './Dark'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ContentContainer from './ContentContainer'

function HomePage() {
    return (
        <ContentContainer>
            <Home />
            <Techs/>
            {/* <DarkButton /> */}
            <About/>
            <Projects />
            <Contact />
        </ContentContainer>
    )
}
export default HomePage