/* eslint-disable react/prop-types */
function Container({children}) {
    return (
        <section className="flex flex-col-reverse lg:flex lg:flex-row justify-center items-center w-full h-full px-4 lg:px-24 gap-4">
            {children}
        </section>
    )
}

export default Container