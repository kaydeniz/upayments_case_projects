import {Card, Divider, Grid, IconButton, Stack, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import {useState} from "react";
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
        <Stack spacing={1} className="Home-Page-style">
            <Grid container>
                <Grid item xs={4}>
                    <Card variant="outlined" className="Product-Card-Style">
                        <img className="Product-Image-Style"
                             src={`${avatar}?w=164&h=164&fit=crop&auto=format`}
                             srcSet={`${avatar}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                             alt={name}
                             loading="lazy"/>
                    </Card>
                </Grid>
                <Grid item xs={8} className="Product-Detail-Name-Style">
                    <Typography variant="h3" component="div">
                        {name}
                    </Typography>
                    <div className="Price-Delete-Div-Style">
                        <Typography variant="h5" component="div">
                            ${price}
                        </Typography>
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
                    </div>
                </Grid>
            </Grid>
            <Divider style={{height: 5, color: 'black'}}/>
            <div className="description-style">
                <Typography variant="h5" component="div">
                    Description
                </Typography>
                <p> {description}</p>
            </div>
        </Stack>);
}

export default Index;
