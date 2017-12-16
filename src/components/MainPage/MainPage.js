import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';

function MainPage() {
  return (
    <div>
      <h2>This is the main page</h2>
      <Divider />
    </div>
  );
}

export default connect()(MainPage);
