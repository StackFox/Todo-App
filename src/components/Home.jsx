import NavBar from './NavBar';
import NewTodo from './NewTodo';
import { useState } from 'react';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return (
        <>
            <div className={isDarkMode ? "bg-gray-900 min-h-screen" : "bg-white min-h-screen"}>
                <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                <div className="container">
                    <NewTodo isDarkMode={isDarkMode} />
                </div>
            </div>
        </>
    )
}

export default Home
