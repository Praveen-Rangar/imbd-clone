import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NavbarMenu = (props: any) => {
  const { open } = props;
  const { handleClose } = props;
  const openMenu = Boolean(open);
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span className="">Populer</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span className="">Top Rated</span>{" "}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span className="">Upcoming</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarMenu;
