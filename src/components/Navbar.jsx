import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", borderBottom: "1px solid #3d3d3d", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
  <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white" }}>
      <img src={logo} alt="logo" height={45} />
      <span style={{ marginLeft: "10px", fontSize: "1.5rem", fontWeight: "bold" }}>LearnTube</span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
