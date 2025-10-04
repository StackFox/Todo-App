import './App.css'
import NavBar from './components/NavBar'
import NewTodo from './components/NewTodo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// import { Features } from 'tailwindcss';

function App() {
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

export default App
