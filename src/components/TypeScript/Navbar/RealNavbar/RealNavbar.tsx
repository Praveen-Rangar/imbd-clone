import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
  IconButton,
  SwipeableDrawer,
  Drawer,
} from "@mui/material";
import { logoURL } from "../../constants/Constant";
import { Menu, BookmarkAdd, ExpandMore, Search } from "@mui/icons-material";
import NavbarMenu from "./NavbarMenu";
import { Link } from "react-router-dom";
import MobileSearchBar from "./MobileSearchBar";

const StyledAppBar = styled(AppBar)`
  position: none !important;
`;

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 48px !important;
  justify-content: space-between;
  position: sticky !important;

  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
  .pro {
    color: #33c5f3;
  }
  .logoURL {
    height: 32px;
    width: 64px;
  }
  .SearchBar {
    display: flex;
    height: 33px;
    background: #ffffff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
    padding-left: 16px;
    margin-left: 8px;
  }
  .Menu {
    width: 65px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .MenuChild {
    padding-right: 5px;
  }
  .proMax {
    display: flex;
    width: 68px;
  }

  .IconButtonForMobileUse {
    display: none;
  }

  @media (max-width: 1024px) {
    .proMax {
      display: none;
    }
    .Menu {
      display: none;
    }
    .SearchBar {
      width: 640px;
      margin-right: 16px;
      margin-left: 16px;
    }
    & > * {
      padding: 0 0;
    }
    .EN {
      padding-right: 4px;
      padding-left: 16px;
    }
    .WatchList {
      padding-right: 16px;
      padding-left: 16px;
    }
    .Hamburger {
      padding-right: 16px;
      padding-left: 16px;
      cursor: pointer;
    }
  }
  @media (min-width: 1024px) {
    .Hamburger {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .SearchBar {
      display: none;
    }
    .IconButtonForMobileUse {
      display: flex;
      margin-right: -30px;
      cursor: pointer;
    }
    .IconButton {
      padding-right: ;
    }
    .Hamburger {
      padding-left: 6px;
    }
    .WatchList {
      height: 20px;
      margin-right: -50px;
    }
    .logoURL {
      margin-left: -40px;
    }
    .EN {
      height: 36px;
      margin-right: -5px;
    }
    .WatchListChild {
      display: none;
    }
  }
`;

const Logo = styled("img")({
  width: 64,
});

const InputSearchField = styled(InputBase)`
  width: 100%;
`;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const RealNavbar = (props: any) => {
  const [open, setopen] = useState(null);

  const handleClick = (event: any) => {
    setopen(event.currentTarget);
  };

  const handleClose = () => {
    setopen(null);
  };

  return (
    <div>
      {props.searchMenu ? (
        <MobileSearchBar setSearchMenu={props.setSearchMenu} />
      ) : (
        <StyledAppBar>
          <StyledToolBar>
            <Menu onClick={() => props.setstate(true)} className="Hamburger" />
            <Link to="/">
              <Logo src={logoURL} alt="logo.png" className="logoURL" />{" "}
            </Link>
            <Box className="Menu" onClick={handleClick}>
              <Menu className="MenuChild" />
              <Typography>Menu</Typography>
            </Box>
            <NavbarMenu open={open} handleClose={handleClose} />
            <Box className="SearchBar">
              <InputSearchField className="" />
              <IconButton size="large" aria-label="search">
                <Search className="IconButton" />
              </IconButton>
            </Box>
            <Search
              onClick={() => props.setSearchMenu(true)}
              className="IconButtonForMobileUse"
            />
            <Typography className="proMax">
              IMDb{" "}
              <Box className="pro" component="span">
                Pro
              </Box>{" "}
            </Typography>
            <Box className="WatchList">
              <BookmarkAdd />
              <Typography className="WatchListChild">WatchList</Typography>
            </Box>
            <Box className="EN">
              <Typography>EN</Typography>
              <ExpandMore />
            </Box>{" "}
          </StyledToolBar>
        </StyledAppBar>
      )}
    </div>
  );
};

export default RealNavbar;
