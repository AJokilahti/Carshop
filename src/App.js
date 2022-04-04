import React, { useState } from "react";
import classes from "./App.css";
import Traininglist from "./components/Traininglist.js";
import Customerlist from "./components/Customerlist.js";
import NavLinks from "./components/NavLinks.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{display: "flex"}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <nav className={classes.App}>
              <MenuIcon onClick={() => setOpen(!open)} />
              {open && <NavLinks />}
              </nav>
            </IconButton>
            <Typography variant="h6" component="div" sx={{mx: 41, flexGrow: 1, alignContent: "flex-end"}}>
              Welcome to Personal Trainer
            </Typography>

            
          </Toolbar>
        </AppBar>
      </Box>
      <BrowserRouter >
        <Link style={{marginLeft:467}}to="/">Training</Link>
        {"  "}
        <Link to="/customer">Customers</Link>
        {"  "}

        <Routes>
          <Route path="/" element={<Traininglist />} />
          <Route path="/customer" element={<Customerlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
