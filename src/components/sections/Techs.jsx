function Techs(){
    return (
        <section className="flex flex-col p-8 lg:flex lg:flex-row lg:gap-8 items-center lg:px-24 mt-6">
            <h2 className="text-neutral-800 font-semibold text-center lg:text-start">Tech Stacks <span className="font-light text-xl opacity-50 lg:ml-4">|</span></h2>
            <ul className="flex flex-wrap justify-center lg:ml-6 lg:justify-start lg:flex-nowrap md:flex gap-4 lg:gap-8 w-4/5">
                <li><img className="w-28 transition-all duration-500 hover:-translate-y-3" src="https://skillicons.dev/icons?i=html,css" alt="" /></li>
                <li><img className="w-28 transition-all duration-500 hover:-translate-y-3" src="https://skillicons.dev/icons?i=js,nodejs" alt="" /></li>
                <li><img className="w-28 transition-all duration-500 hover:-translate-y-3" src="https://skillicons.dev/icons?i=ts,next" alt="" /></li>
                <li><img className="w-28 transition-all duration-500 hover:-translate-y-3" src="https://skillicons.dev/icons?i=mongo,express" alt="" /></li>
                {/* <li><img className="w-28 transition-all duration-500 hover:-translate-y-3" src="https://skillicons.dev/icons?i=tailwind,bootstrap" alt="" /></li> */}
            </ul>
        </section>
    )
}

export default Techs