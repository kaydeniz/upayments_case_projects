import {Button, Grid, InputLabel, Stack, TextField} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Index() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const axios = require('axios');
    let navigate = useNavigate();
    const [state, setState] = useState({
        name: '',
        description: '',
        avatar: '',
        price: ''
    })

    useEffect(() => {
        fetchData();
    }, [])

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    function fetchData() {
        axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
            .then(function (response) {
                console.log(response.data);
                setCategoryList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    function onChange(e) {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    function submitProduct() {
        setLoading(true);
        const params = {
            ...state,
            category: selectedCategory,
            developerEmail: "doe@gmail.com"
        }
        axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', params)
            .then(function (response) {
                console.log(response);
                navigate("/", {replace: true});
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <Grid container className="Create-Page-Style">
            <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                <Stack spacing={1}>
                    <p style={{fontWeight: 'bold', fontSize: 24}}>Create Product</p>
                    <TextField
                        id="name" name="name"
                        variant="outlined"
                        placeholder="Product Name"
                        value={state.name}
                        onChange={onChange}
                        style={{
                            backgroundColor: "white"
                        }}
                        InputProps={{
                            style: {
                                color: "#282c34"
                            }
                        }}
                    />
                    <TextField id="description" name="description" variant="outlined" placeholder="Description"
                               value={state.description} onChange={onChange} multiline minRows={"3"}
                               style={{
                                   backgroundColor: "white"
                               }}
                               InputProps={{
                                   style: {
                                       color: "#282c34"
                                   }
                               }}/>
                    <TextField id="avatar" name="avatar" variant="outlined" placeholder="Image URL" value={state.avatar}
                               onChange={onChange}
                               style={{
                                   backgroundColor: "white"
                               }}
                               InputProps={{
                                   style: {
                                       color: "#282c34"
                                   }
                               }}/>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Categories</InputLabel>
                            <Select
                                id="category-select"
                                value={selectedCategory}
                                onChange={handleChange}
                                label="Categories"
                                style={{
                                    backgroundColor: "white"
                                }}
                                InputProps={{
                                    style: {
                                        color: "#282c34"
                                    }
                                }}
                            >
                                {categoryList.map((category, index) => {
                                    return <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        id="price"
                        name="price"
                        variant="outlined"
                        placeholder="Price"
                        onChange={onChange}
                        type="number"
                        style={{
                            backgroundColor: "white"
                        }}
                        InputProps={{
                            style: {
                                color: "#282c34"
                            }
                        }}/>
                    <Button variant="outlined" onClick={submitProduct}
                            disabled={loading}
                            style={{
                                backgroundColor: "white",
                                color: "#282c34",
                                fontWeight: 'bold'
                            }}
                    > {loading ? 'Loading...' : 'SUBMIT'} < /Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Index;
