import {Card, CardContent, Stack, Typography} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ProductCard(props) {
    const {product} = props
    let navigate = useNavigate();
    const {name, price, avatar, id} = product;

    function openProductDetail() {
        navigate(`/products/${id}`);
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
