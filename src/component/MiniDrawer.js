import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { SideBar } from "../static/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Hidden,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import ListItemLinkContainer from "../container/ListItemLinkContainer";
import { useStyles } from "../static/MiniDrawerStyles";

function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { opensidebar, handlesidebar } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: opensidebar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handlesidebar}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: opensidebar,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            <Typography
              style={{ color: "white" }}
              component={Link}
              to="/"
              variant="h6"
              noWrap
            >
              JPMORGAN CHASE & Co.
            </Typography>
          </Hidden>
          {!opensidebar && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: opensidebar,
          [classes.drawerClose]: !opensidebar,
        })}
        classes={{
          paper: clsx(
            {
              [classes.drawerOpen]: opensidebar,
              [classes.drawerClose]: !opensidebar,
            },
            classes.darkBackground
          ),
        }}
        open={opensidebar}
      >
        <div className={classes.toolbar}>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography variant="h5" style={{ color: "white" }}></Typography>
          </Box>
          <IconButton onClick={handlesidebar}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </div>

        <Divider />
        <nav className={classes.lists}>
          <List>
            {SideBar.map((menu, index) => (
              <React.Fragment key={index}>
                <ListItemLinkContainer {...props} menuobj={menu} />
              </React.Fragment>
            ))}
          </List>
        </nav>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
}

export default withRouter(MiniDrawer);
