import './App.css';
import HomePage from "./Pages/HomePage"
import CreateProduct from "./Pages/CreateProduct"
import Header from "./Components/Header";
import {Stack} from "@mui/material";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <Stack spacing={1} className="Layout-Style">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="createProduct" element={<CreateProduct/>}/>
            </Routes>
        </Stack>
    );
}

export default App;
