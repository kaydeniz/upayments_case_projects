import {InputLabel, Stack, TextField} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect} from "react";

function SearchAndSelectionBar(props) {
    const {selectedCategory, setSelectedCategory, searchText, setSearchText} = props;
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
            <TextField id="search" name="search" value={searchText} variant="outlined"
                       className="Search-TextField-Style"
                       style={{
                           backgroundColor: "white"
                       }}
                       inputProps={{
                           style: {
                               color: "#282c34"
                           }
                       }}
                       placeholder="Apple Watch,Samsung..."
                       onChange={(e) => setSearchText(e.target.value)}/>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="category-label">Categories</InputLabel>
                    <Select
                        style={{
                            backgroundColor: "white"
                        }}
                        inputProps={{
                            style: {
                                color: "#282c34"
                            }
                        }}
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
