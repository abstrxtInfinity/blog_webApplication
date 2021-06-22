import React, { useState } from "react"
import { Link } from "react-router-dom"

import { SidebarData } from './Data/SidebarData'
import '../Style/Sidebar.css'



function Sidebar() {
    function scrollClose() {
        let y = window.scrollY;
        const menuToggle = document.querySelector('.icon');
        const navigation = document.querySelector('.nav-menu');

        if ((y > 0 && (y > 0 && menuToggle.classList.contains("active")))) {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');

        }

    };
    window.addEventListener("scroll", scrollClose);


    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <header>
                <div className={sidebar ? "icon active" : "icon"} onClick={toggleSidebar}>
                    <div className="hamburger"></div>
                </div>
            </header>
            <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={toggleSidebar}>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="endline">
                    <ul className="sci">
                        <li>
                            <Link to="#">Instagram</Link>
                        </li>
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Github</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
