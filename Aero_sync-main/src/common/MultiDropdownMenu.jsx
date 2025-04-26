import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  ListItemText,
  Divider,
  Box,
  FormControl,
  InputLabel
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

// Styled component for the dropdown button
const StyledButton = styled(Button)(({ theme }) => ({
  border: '1px solid #64748b', // slate-500 border
  color: '#64748b', // slate-500 text
  '&:hover': {
    border: '1px solid #64748b', // keep border on hover
    backgroundColor: 'rgba(100, 116, 139, 0.04)' // subtle hover effect
  },
  justifyContent: 'space-between',
  textTransform: 'none',
  padding: '8px 16px',
  width: '100%'
}));

const StyledInputLabel = styled(InputLabel)({
  color: '#64748b', // slate-500
  '&.Mui-focused': {
    color: '#64748b' // keep color when focused
  }
});

const SingleSelectDropdown = ({ 
  options, 
  label,
  selectedItem,
  onSelect,
  searchable = true
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm('');
  };

  const handleItemClick = (value) => {
    onSelect(value);
    handleClose();
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FormControl fullWidth>
      {/* <StyledButton
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        // variant="outlined"
        sx={{
          '& .MuiButton-endIcon': {
            color: '#64748b' // slate-500 for dropdown icon
          }
        }}
      >
        {selectedItem || `${label}`}

      </StyledButton> */}
      <StyledButton
  endIcon={null} // We’ll place icon manually to control layout
  onClick={handleClick}
  sx={{
    '& .MuiButton-endIcon': {
      color: '#64748b',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 0
  }}
>
  <Box sx={{ flex: 1, textAlign: 'left' }}>
    {selectedItem || label}
  </Box>

  {/* Separator line */}
  <Box
    sx={{
      height: 30,
      width: '2px',
      backgroundColor: '#64748b',
      mx: 1
    }}
  />

  <ArrowDropDownIcon sx={{ color: '#64748b' }} />
</StyledButton>

      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: '25ch',
          },
        }}
      >
        {searchable && (
          <Box sx={{ px: 2, py: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1, color: '#64748b' }} />,
                sx: {
                  '& fieldset': {
                    borderColor: '#64748b' // slate-500 border for search
                  }
                }
              }}
            />
          </Box>
        )}
        
        <Divider />
        
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleItemClick(option)}
              selected={selectedItem === option}
              sx={{
                color: '#64748b', // slate-500 text
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100, 116, 139, 0.08)' // subtle selection
                }
              }}
            >
              <ListItemText primary={option} />
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options found</MenuItem>
        )}
      </Menu>
    </FormControl>
  );
};

export default SingleSelectDropdown;
