import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Drawer, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function LeftDrawer(props: any) {
  const drawer = (
    <Box
      sx={{
        width: 250,
        height: 1,
        backgroundColor: "#212121",
        color: "#ffffff",
      }}
    ></Box>
  );
  return (
    <Drawer
      className="Hamburger"
      anchor="left"
      open={props.state}
      onClose={() => props.setstate(false)}
    >
      {drawer}
    </Drawer>
  );
}
