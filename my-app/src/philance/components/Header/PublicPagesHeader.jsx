import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";

// core components
import Button from "components/CustomButtons/Button";

import { pagesRoutes,headerRoutes } from "../../routes/pages.jsx";

import publicPagesHeaderStyle from "assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx";

class PublicPagesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.setState({ open: false });
    }
  }

  render() {
    const { classes, color } = this.props;
    const appBarClasses = cx({
      [" " + classes[color]]: color
    });

    var list = (
      <List className={classes.list}>
        {headerRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          const navLink =
            classes.navLink +
            cx({
              [" " + classes.navLinkActive]: this.activeRoute(prop.path)
            });
          return (
            <ListItem key={key} className={classes.listItem}>
              <NavLink to={prop.path} className={navLink}>
                <ListItemIcon className={classes.listItemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.short}
                  disableTypography={true}
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );

    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar>
          <Hidden smDown implementation="css">
            <div className={classes.flex}>
              <Typography variant="title" color="inherit">
  
                  <img
                    src={require("philance/assets/logos/Philance-logo-text.png")}
                    alt="Philance"
                  />
                
              </Typography>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flex}>
              {/* <Typography variant="title" color="inherit"> */}
                {
                  <img
                    src={require("philance/assets/logos/Philance-logo-text.png")}
                    alt="Philance"
                  />
                }
              {/* </Typography> */}
            </div>
          </Hidden>
          <Hidden smDown implementation="css">
            {list}
          </Hidden>
          <Hidden mdUp>
            <Button
              className={classes.sidebarButton}
              color="transparent"
              justIcon
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </Button>
          </Hidden>
          <Hidden mdUp implementation="css">
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={this.state.open}
                classes={{
                  paper: classes.drawerPaper
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {list}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

PublicPagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(publicPagesHeaderStyle)(PublicPagesHeader);
