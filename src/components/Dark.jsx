import { MdDarkMode } from "react-icons/md";
function DarkButton() {
    return (
        <button className="fixed bottom-6 right-8 text-neutral-900 text:bg-neutral-50">
            <MdDarkMode className="text-3xl" />
        </button>
    )
}

export default DarkButton