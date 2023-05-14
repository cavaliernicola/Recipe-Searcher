import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

function Item({title, to, icon, selected, setSelected}) {
  const { toggleSidebar, broken } = useProSidebar();
  
  return (
    <MenuItem active={selected === title} onClick={() => { 
      setSelected(title);
      if (broken) toggleSidebar();
    }} icon={icon} component={ <Link to={to} />}>
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

export default function SideBar() {
  const [selected, setSelected] = useState("Home");
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  
  function collapseMenu() {
    if (broken) {
      if (collapsed) {
        collapseSidebar();
        toggleSidebar();
      } else {
        toggleSidebar();
      }
    } else {
      collapseSidebar();
    }
  }
  
  return (
    // By default pro-side-bar does not allow to have the content of the sidebar fixed on scroll, which would be a bad UI in our case 
    // since we can have long content in RecipeDetails scene, therefore we workaround that by wrapping the content of the SideBar in a fixed div
    // and dynamically change the width taken by the sidebar, the sidebar transition is the same of its container so the "magic" behind it is not noticeable.

    // NOTE: we set transition: "none" when broken (which means small device and therefore sidebar not shown) to mitigate a pro-side-bar issue with initial render: https://github.com/azouaoui-med/react-pro-sidebar/issues/155
    // which incorrectly show the sidebar open and then it quickly close it. A quick transition should be less annoying than a moving UI.
    // this is not our bug and it has to be addressed to the third-party component we are using. Since it's not a big issue it will stay like this until the new update will be released. 
    <div style={{ marginRight: (broken ? "0" : !collapsed ? "250px" : "80px"), transition: (broken ? "none" : "0.5s")}}> 
      <div style={{ position: "fixed", zIndex: "1000"}}>
        <Sidebar breakPoint="md" transitionDuration={500}>
          <Menu iconShape="square">

            <MenuItem onClick={() => collapseMenu() } icon={<MenuOutlinedIcon className={ collapsed ? undefined : "collapsed" } /> } style={{ margin: "10px 0 20px 0"}} />
  
            <Box paddingLeft={collapsed ? undefined : "10px"}>
              <Item title="Home" icon={<HomeOutlinedIcon className="menu-icon" />} to="/" selected={selected} setSelected={setSelected} />
              <Item title="Favorite" to="/favorite" icon={<FavoriteBorderOutlinedIcon className="menu-icon" />} selected={selected} setSelected={setSelected} />
              <Item title="FAQ Page" to="/faq" icon={<HelpOutlinedIcon className="menu-icon" />} selected={selected} setSelected={setSelected} />
            </Box>
          </Menu>
        </Sidebar>
      </div>
    </div>
  )
}