import './App.css';
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import CreateProduct from "./Pages/CreateProduct"
import Header from "./Components/Header";
import {Stack} from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom";

function App() {
    return (
        <Stack spacing={1} className="Layout-Style">
            <Header/>
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/products" replace/>}
                />
                <Route path="products" element={<HomePage/>}/>
                <Route path="products/:productId" element={<ProductPage/>}/>
                <Route path="createProduct" element={<CreateProduct/>}/>
            </Routes>
        </Stack>
    );
}

export default App;
