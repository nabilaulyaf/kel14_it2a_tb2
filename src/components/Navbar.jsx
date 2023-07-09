import { useNavigate } from "react-router-dom";
import navLogo from "../img/ganaralogo1.png"

const Navbar = ({ menus }) => {
    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    }

    const listMenu = menus.map((menu, index) =>
    <li  className="mr-6 py-6" key={index}>
        <button className="text-white hover:text-gray-950 hover:cursor-pointer font-monserrat"
        onClick={() => handleClick(menu.route)}>
            {menu.label}
        </button>
    </li>
    )

    return(
        <nav className="z-50 bg-stone-600 sticky top-0 flex justify-end place-items-end px-20 ">
            <img src={navLogo} alt="navlogo" className=" ml-14 h-20 absolute left-5"  />
            <ul className="flex px-4">
                {listMenu}
            </ul>
        </nav>
    )
}

export default Navbar;