import React from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//TODO: Change locker and profile components once components are completed

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Nav extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={`${classes.list} nav`}>
        <List>
          {[
            <Link to="/">Enter</Link>,
            <Link to="/chest">Chest</Link>,
            <Link to="/plank">Plank</Link>,
            <Link to="/compass">Compass</Link>
          ].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} className="nav-items" />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className="nav">
        <Button
          className="nav-button"
          onClick={this.toggleDrawer("left", true)}
        >
          traitor menu
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            className="nav-bar"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

// TemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Nav);

// const Nav = () => {
//   return (
//     <>
//       <nav>
//         <Link to="/">Enter</Link>
//         <Link to="/chest">Chest</Link>
//         <Link to="/plank">Plank</Link>
//         <Link to="/compass">Compass</Link>
//         <Link to="/profile">Locker</Link>
//         <Link to="/records">Records</Link>
//       </nav>
//     </>
//   );
// };

// export default Nav;
