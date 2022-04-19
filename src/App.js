import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Carlist from "./components/Carlist.js";

function App() {
  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{display: "flex", alignItems: "center"}} position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{mx: 41, flexGrow: 1, alignContent: "flex-end"}}>
              Welcome to Carshop
            </Typography>

            
          </Toolbar>
        </AppBar>
      </Box>
      <Carlist/>
    </div>
  );
}

export default App;
