import {Fab, Stack} from "@mui/material";
import SearchAndSelectionBar from "./SearchAndSelectionBar";
import ProductList from "./ProductList";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import * as React from "react";

function Index() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");

    return (
        <Stack spacing={1} className="Home-Page-style">
            <SearchAndSelectionBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                                   searchText={searchText} setSearchText={setSearchText}/>
            <ProductList selectedCategory={selectedCategory} searchText={searchText}/>
            <Link className="Fab-Link" to="/createProduct"><Fab aria-label="add" className="fab-style"> <AddIcon
                style={{color: 'white'}}/></Fab></Link>
        </Stack>
    );
}

export default Index;
