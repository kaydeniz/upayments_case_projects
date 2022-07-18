import {Fab, Stack} from "@mui/material";
import SearchAndSelectionBar from "./SearchAndSelectionBar";
import ProductList from "./ProductList";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {Link, Outlet} from "react-router-dom";
import * as React from "react";

function Index() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState("");

    return (
        <Stack spacing={1} className="Home-Page-style">
            <SearchAndSelectionBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                                   searchText={searchText} setSearchText={setSearchText}/>
            <ProductList selectedCategory={selectedCategory} searchText={searchText}/>
            <Fab aria-label="add" className="fab-style">
                <Link className="Fab-Link" to="/createProduct"> <AddIcon style={{color: 'white'}}/></Link>
            </Fab>
            <Outlet/>
        </Stack>
    );
}

export default Index;
