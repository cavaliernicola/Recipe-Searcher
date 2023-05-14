import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";

function Item({title, to, icon, selected, setSelected}) {
  return (
    <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Home");
  
  return (
    
    <>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">

          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined} style={{ margin: "10px 0 20px 0"}}>
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}><MenuOutlinedIcon /></IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Item title="Home" icon={<HomeOutlinedIcon className="menu-icon" />} to="/" selected={selected} setSelected={setSelected} />
            <Item title="Favorite" to="/favorite" icon={<FavoriteBorderOutlinedIcon className="menu-icon" />} selected={selected} setSelected={setSelected} />            
            <Item title="FAQ Page" to="/faq" icon={<HelpOutlinedIcon className="menu-icon" />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </>
  )
}