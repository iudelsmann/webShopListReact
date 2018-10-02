import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ShoppingLists extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} role="navigation" button>
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default ShoppingLists;
