import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { db } from '../../common/config/firebase';

class ShoppingLists extends Component {
  lists;

  renderListItems() {
    db.collection('lists').onSnapshot(snap => {
      this.lists = [];

      snap.forEach(doc => {
        this.lists.push(doc.data().name);
      });

      console.log(this.lists);
    });
  }

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
