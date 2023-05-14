import SearchBar from "../SearchBar/SearchBar";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";

export default function TopBar() {
  const { broken, collapsed, toggleSidebar, collapseSidebar } = useProSidebar();

  function collapseMenu() {
    if (collapsed) {
      collapseSidebar()
    }
    toggleSidebar()
  }

  return (
    <Box display="flex" alignItems="center" mt="10px" >
      {broken && (
        <Box>
          <IconButton onClick={() => collapseMenu()} sx={{ ml: "20px" }}> 
            <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
      )}
      
      <SearchBar />
    </Box>
  )
}