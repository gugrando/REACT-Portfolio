/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
function LinkButton({to, text, classe}) {
    return (
        <Link className={classe} to={to}>
            <button className="w-full h-full">{text}</button>
        </Link>
    )
}
export default LinkButton