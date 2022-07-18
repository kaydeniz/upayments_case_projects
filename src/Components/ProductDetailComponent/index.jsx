import {Card, CardContent, Divider, Grid, IconButton, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Index(props) {
    const {product} = props;
    const {name, avatar, price, description, id} = product;
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const axios = require('axios');
    let navigate = useNavigate();

    function deleteProduct() {
        setLoading(true);
        const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
        axios.delete(url)
            .then(function (response) {
                // handle success
                setConfirmOpen(false);
                navigate(`/products`);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <Stack spacing={1}>
            <Grid container>
                <Grid item xs={4}>
                    <Card variant="outlined" className="Product-Card-Style">
                        <CardContent>
                            <img className="Product-Image-Style"
                                 src={avatar}
                                 srcSet={avatar}
                                 alt={name}
                                 loading="lazy"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} className="Product-Detail-Name-Style">
                    <p>{name}</p>
                    <p>{price}</p>
                    <IconButton aria-label="delete" color="primary" onClick={() => setConfirmOpen(true)}>
                        <DeleteIcon/>
                    </IconButton>
                    <ConfirmDialog
                        title="Delete Product?"
                        open={confirmOpen}
                        setOpen={setConfirmOpen}
                        onConfirm={deleteProduct}
                        loading={loading}
                    >
                        Are you sure you want to delete this product?
                    </ConfirmDialog>
                </Grid>
            </Grid>
            <Divider/>
            <p> {description}</p>
        </Stack>);
}

export default Index;
