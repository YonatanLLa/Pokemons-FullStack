import { Form, Detail, Landing, Home } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css"
import axios from "axios"
axios.defaults.baseURL = "https://pokemons-fullstack-dev-hgdh.1.us-1.fl0.io";

function App() {
  const location = useLocation()
  return (
    <div className={styles.appContainer}>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
