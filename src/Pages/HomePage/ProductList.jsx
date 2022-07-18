import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {CircularProgress, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import {getUpdatedList} from "./utils";

function ProductList(props) {
    const {selectedCategory, searchText} = props;
    const [productList, setProductList] = useState([]);
    const [shownList, setShownList] = useState(-1);
    const [searchedList, setSearchedList] = useState(-1);

    const axios = require('axios');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (shownList !== -1) {
            const updatedList = getUpdatedList(shownList, searchText);
            setSearchedList(updatedList);
        }
    }, [searchText, shownList]);

    useEffect(() => {
        if (selectedCategory) {
            const updatedList = productList.filter(product => product.category === selectedCategory)
            setShownList(updatedList);
        }
    }, [selectedCategory]);

    function fetchData() {
        axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setProductList(response.data);
                setShownList(response.data);
                setSearchedList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        shownList === -1 ? <Box className="Loading-Box-Style">
            <CircularProgress size="100"/>
        </Box> : <Grid container className="ProductList-Container">
            {searchedList.map((product, index) => {
                return <Grid key={index} item xs={3} style={{padding: 20}}> <ProductCard product={product}/> </Grid>
            })}
        </Grid>
    );
}

export default ProductList;
