import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

import { categories } from "../utils/constants";


const StyledSidebar = styled(Stack)(({ theme }) => ({
  overflowY: "auto",
  height: "95%",
  padding: "10px 0",
  backgroundColor: "transparent",
  width: "200px", // Increased width
  "@media (max-width: 900px)": {
    flexDirection: "row",
    height: "auto",
  },
}));

const CategoryButton = styled('button')(({ selected }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: selected ? '#FC1503' : 'transparent',
  color: selected ? 'white' : 'rgba(255, 255, 255, 0.8)',
  border: 'none',
  borderBottom: '2px solid transparent', // Changed border thickness
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', // Added border-color transition
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    borderColor: selected ? 'transparent' : '#FC1503', // Adjusted border color on hover
  },
  '&:last-of-type': {
    borderBottom: '2px solid transparent', // Changed border thickness for the last item
  },
  '& span:first-of-type': {
    marginRight: '15px',
    fontSize: '20px',
  },
}));

const Categories = ({ selectedCategory, setSelectedCategory }) => (

  <StyledSidebar direction={{ xs: "row", md: "column" }}>
    {categories.map((category) => (
      <CategoryButton
        key={category.name}
        selected={category.name === selectedCategory}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </CategoryButton>
    ))}
  </StyledSidebar>
  // <Stack
  //   direction="row"
  //   sx={{
  //     overflowY: "auto",
  //     height: { sx: "auto", md: "95%" },
  //     flexDirection: { md: "column" },
  //   }}
  // >
  //   {categories.map((category) => (
  //     <button
  //       className="category-btn"
  //       onClick={() => setSelectedCategory(category.name)}
  //       style={{
  //         background: category.name === selectedCategory && "#FC1503",
  //         color: "white",
  //       }}
  //       key={category.name}
  //     >
  //       <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
  //         {category.icon}
  //       </span>
  //       <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
  //         {category.name}
  //       </span>
  //     </button>
  //   ))}
  // </Stack>
);

export default Categories;
