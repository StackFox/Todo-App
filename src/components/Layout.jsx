import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NewTodo from "./NewTodo";
import { useState } from "react";

function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
    const location = useLocation();

    return (
        <div
            className={
                isDarkMode ? "bg-gray-900 min-h-screen" : "bg-white min-h-screen"
            }
        >
            <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className="container">
                {location.pathname === "/" && <NewTodo isDarkMode={isDarkMode} />}
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
