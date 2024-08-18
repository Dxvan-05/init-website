
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/admin/*" exact element={<Admin />}/>
            </Routes>
        </>
    );
}

export default App;
