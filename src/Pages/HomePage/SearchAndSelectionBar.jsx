import {InputLabel, Stack, TextField} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import {useEffect} from "react";

function SearchAndSelectionBar(props) {
    const {selectedCategory, setSelectedCategory} = props;
    const [categoryList, setCategoryList] = React.useState([]);
    const axios = require('axios');

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

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        >
            <TextField id="outlined-basic" variant="outlined" placeholder="Apple Watch,Samsung..."/>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="category-label">Categories</InputLabel>
                    <Select
                        id="category-select"
                        value={selectedCategory}
                        onChange={handleChange}
                        label="Categories"
                    >
                        {categoryList.map((category, index) => {
                            return <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </Stack>
    );
}

export default SearchAndSelectionBar;
