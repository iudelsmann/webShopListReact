import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    width: 48,
  },
};

class Topbar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    showBackButton: PropTypes.bool,
  };

  renderBackButton() {
    if (this.props.showBackButton) {
      return (
        <div className={this.props.classes.menuButton}>
          <IconButton color="inherit" aria-label="Back">
            <ArrowBack />
          </IconButton>
        </div>
      );
    } else {
      return <div className={this.props.classes.menuButton} />;
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            {this.renderBackButton()}
            <Typography
              variant="title"
              color="inherit"
              className={this.props.classes.grow}
            >
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Topbar);
