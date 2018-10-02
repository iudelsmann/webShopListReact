import React, { Component } from 'react';

import Topbar from '../../common/topbar/Topbar';
import ShoppingLists from './ShoppingLists';

class Home extends Component {
  render() {
    return (
      <div>
        <Topbar title="Home" showBackButton={false} />
        <ShoppingLists />
      </div>
    );
  }
}

export default Home;
