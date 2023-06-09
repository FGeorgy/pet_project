import { Suspense, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.NORMAL);

  const toggleTheme = () => {
    setTheme(theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL);
  }

  return (
    <div className={`app ${theme}`}>
      <button
        onClick={toggleTheme}
      >TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={'/about'}
            element={<AboutPageAsync/>}
          />
          <Route
            path={'/'}
            element={<MainPageAsync/>}
          />
        </Routes>
      </Suspense>
    </div>
  )

}

export default App;