import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import ProductDetailComponent from "../../Components/ProductDetailComponent"
import Box from "@mui/material/Box";

function Index() {
    let {productId} = useParams();
    const axios = require('axios');
    const [productDetail, setProductDetail] = useState(-1);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${productId}`
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setProductDetail(response.data);
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
        productDetail === -1 ? <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box> : <ProductDetailComponent product={productDetail}/>
    );
}

export default Index;
