import {useState} from "react";
import {menuData} from "./menuData";
import SubMenu from "./subMenu";
import {Link} from "react-router-dom";

function NavMenu({onLinkClick}) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubMenuKey, setActiveSubMenuKey] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        if (menuItem.submenu) {
            setIsSubMenuOpen(!isSubMenuOpen);
            setActiveSubMenu(menuItem);
            setActiveSubMenuKey(menuItem.title);
        } else {
            onLinkClick();
        }
    }

    return (
        <div
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white/80 backdrop-blur-lg z-10 overflow-hidden">
            <ul className="text-center">
                {menuData.map((menuItem) => (
                    <li className="my-5 text-xl" key={menuItem.title}>
                        {menuItem.submenu ? (
                            <button
                                className="hover:text-red-600 hover:scale-105 ease-in duration-200"
                                onClick={() => handleMenuItemClick(menuItem)}
                            >
                                {menuItem.title}
                            </button>
                        ) : (
                            <h1 className="hover:text-red-600 hover:scale-105 ease-in duration-200">
                                <Link onClick={onLinkClick} to={menuItem.url}>
                                    {menuItem.title}
                                </Link>
                            </h1>
                        )}
                        {isSubMenuOpen && activeSubMenu && activeSubMenuKey === menuItem.title && (
                            <SubMenu submenuItems={menuItem.submenu} onLinkClick={onLinkClick}/>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavMenu;
