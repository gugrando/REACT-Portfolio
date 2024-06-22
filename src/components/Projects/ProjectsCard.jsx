function ProjectCard(img, title, description, link, tag) {
    return (
        <section className="w-1/2 flex">
            <div>
                <img src={img} alt=""/>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
                <p>{link}</p>
                <p>{tag}</p>
            </div>
        </section>
    )
}

export default ProjectCard