import {Fab, Stack} from "@mui/material";
import SearchAndSelectionBar from "./SearchAndSelectionBar";
import ProductList from "./ProductList";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";

function Index() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <Stack spacing={1} className="Home-Page-style">
            <SearchAndSelectionBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ProductList selectedCategory={selectedCategory}/>
            <Fab color="primary" aria-label="add" className="fab-style">
                <AddIcon/>
            </Fab>
        </Stack>
    );
}

export default Index;
