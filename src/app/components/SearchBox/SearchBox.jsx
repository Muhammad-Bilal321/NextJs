import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, MenuItem, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    // State for the search input
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    // Sample dropdown options (could come from an API or static data)
    const allOptions = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

    // Handle input and filter dropdown options
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter options based on input value
        if (query) {
            const filtered = allOptions.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    return (
        <Box sx={{ position: 'relative', width: { xs: '100%', sm: '300px' }, mt: { xs: 2, md: 0 }, backgroundColor: '#fff', borderRadius: "5px" }}>
            {/* Search Input */}
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Search"
                color='warning'
                fullWidth
                sx={{
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    minWidth: { xs: '100%', sm: '300px' },
                    maxWidth: { xs: '100%', sm: '600px', md: '500px' },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Search"
                                color='warning'
                                onClick={() => {
                                    console.log('Search icon clicked');
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                onKeyUp={handleSearch} // Filter options on keyUp
            />

            {/* Dropdown: Show if there are filtered options */}
            {filteredOptions.length > 0 && (
                <List
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        backgroundColor: 'white',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        borderRadius: '5px',
                    }}
                >
                    {filteredOptions.map((option, index) => (
                        <ListItem
                            key={index}
                            button
                            onClick={() => {
                                console.log(`Option selected: ${option}`);
                                setSearchQuery(option); // Set search input to selected option
                                setFilteredOptions([]); // Close the dropdown after selection
                            }}
                        >
                            {option}
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default SearchBox;
