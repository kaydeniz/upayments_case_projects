import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {Grid} from "@mui/material";

function ProductList(props) {
    const {selectedCategory} = props;
    const [productList, setProductList] = useState([]);
    const [shownList, setShownList] = useState([]);

    const axios = require('axios');

    useEffect(() => {
        fetchData();
    }, []);

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
        <Grid container className="ProductList-Container">
            {shownList.map((product, index) => {
                return <Grid key={index} item xs={3} style={{padding: 20}}> <ProductCard product={product}/> </Grid>
            })}
        </Grid>
    );
}

export default ProductList;
