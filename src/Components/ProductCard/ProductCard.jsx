import {Card, CardContent, Stack, Typography} from "@mui/material";
import axios from "axios";

function ProductCard(props) {
    const {product} = props

    const {name, price, avatar, id} = product;

    function openProductDetail() {
        fetchData();
    }

    const axios = require('axios');

    function fetchData() {
        const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
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
        <Stack spacing={1} className="Product-Stack-Style" onClick={openProductDetail}>
            <Card variant="outlined" className="Product-Card-Style">
                <CardContent>
                    <img className="Product-Image-Style"
                         src={`${avatar}?w=164&h=164&fit=crop&auto=format`}
                         srcSet={`${avatar}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                         alt={name}
                         loading="lazy"/>
                </CardContent>
            </Card>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="h5" component="div">
                ${price}
            </Typography>
        </Stack>
    )
}

export default ProductCard;
