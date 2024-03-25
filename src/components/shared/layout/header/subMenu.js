import {Link} from "react-router-dom";

function SubMenu({submenuItems, onLinkClick}) {
    return (
        <div>
            <div className=" pt-1 px-10">
                <ul>
                    {submenuItems.map((submenuItem) => (
                        <li>
                            <Link className="hover:text-red-600 ease-in duration-300" onClick={onLinkClick}
                                  to={submenuItem.url}>
                                <h1 className="my-3 text-sm">{submenuItem.title}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubMenu;
