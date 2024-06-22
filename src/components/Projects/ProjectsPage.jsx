import { useState, useEffect } from "react"
import { AllProjects, FrontProjects, BackProjects } from "./ProjectsCollection";

function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState("All");

    const handleProjectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue !== selectedProject) {
        setSelectedProject(selectedValue);
        }
        console.log (selectedValue);
    };
        
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <>
            <section className="w-full h-full mt-8 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-20">
                    <h1 className="text-3xl font-bold md:w-1/2">{selectedProject} Projects</h1>
                    <select name="options" id="options" className="w-28 h-8 justify-self-end" value={selectedProject} onChange={handleProjectChange}>
                        <option value="All">All projects</option>
                        <option value="Front">Frontend</option>
                        <option value="Back">Backend</option>
                    </select>
                </div>
                <div>
                    
                </div>
                <article className="flex flex-col flex-wrap w-full h-full md:flex-row">
                    <section className="flex justify-center w-full h-fit">
                        {selectedProject === "All" && <AllProjects />}
                        {selectedProject === "Front" && <FrontProjects />}
                        {selectedProject === "Back" && <BackProjects />}
                    </section>
                    <h3 className="text-xl font-bold text-center w-full text-neutral-500">New projects will be added soon...🧑🏻‍💻 <br />Let me drink a coffee!☕</h3>
                </article>
            </section>
        </>
    )
}

export default ProjectPage